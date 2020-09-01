import React, { useState, useEffect, useRef } from 'react'
import { ReviewsTextArea, Modal, Progress } from 'components/blocks'
import { getKey, getIdForNameInArray, toastConfig } from 'utils'
import { toggleCreateReviewModal, addCompanies } from '@actions'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { PrivacyIcon, InfoIcon } from 'components/vectors'
import HeadShake from 'react-reveal/HeadShake'
import RubberBand from 'react-reveal/RubberBand'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'
import { Formik } from 'formik'
import * as Yup from 'yup'
import * as _ from 'lodash'
import APIClient from '../../../utils/APIClient'
import Link from 'next/link'


import { toast } from 'react-toastify'

const CreateReviewModal = () => {
  const showCreateReviewModal = useSelector((state) => state.showCreateReviewModal)
  const sectors = useSelector((state) => state.sectors)
  const companies = useSelector((state) => state.companies)
  const [reviews, reviewsSet] = useState([''])
  const [reviewHasError, reviewHasErrorSet] = useState(false)
  const notifySuccess = () => toast.success('🥳 Review don cast!!!', toastConfig)
  const notifyError = (message) => toast.error(`😟😟, ${message}`, toastConfig)

  // const nReview = useSelector((state) => state.newReview);

  const dispatch = useDispatch()

  // const addReview = (review) => dispatch(addNewReview(review))
  // const addInitialReview = (review) => dispatch(addFirstReview(review))
  const closeModal = (value) => dispatch(toggleCreateReviewModal(value))
  const storeCompanies = (companies) => dispatch(addCompanies(companies))

  const takeValues = values => reviewsSet(values)
  const lessThanRequiredText = text => text.length < 10
  const testReviews = () => {
    if (lessThanRequiredText(reviews[0])) return true
    return reviews.every(lessThanRequiredText)
  }

  const reviewSchema = Yup.object().shape({
    company: Yup.string()
      .required('Ohh, you forgot!'),
    sector: Yup.string()
      .required('Ohh, you forgot!'),
    company_email: Yup.string()
      .email('Bad email address')
  })

  const sectorInputRef = useRef(null);

  const companySelector = (companyName) => {
    return function (company){
      return company.name === companyName
    }
  }
  const getCompanyIndex = (companies, selector) => {
    return companies.findIndex(selector);
  }

  const addExistingCompanySector  = (companies, values) => {
    const companyName = values.company;
    if(companyName){
      const companyIndex = getCompanyIndex(companies, companySelector(companyName))
      if(companyIndex > -1){
        const sectorName = companies[companyIndex].sector.name;
        values.sector = sectorName
        sectorInputRef.current.value = sectorName
        
      }
    }

  }

  const fetchCompanies = () => {
    APIClient.get('companies/all')
    .then(response => {
      if(response.data && response.data.data){
        const companies = response.data.data
        storeCompanies(companies)
        notifySuccess()
        dispatch(toggleCreateReviewModal(false))
      }
    })
  }

  return (
    showCreateReviewModal
      ? (<Modal onClose={() => { closeModal(false) }}>
        <div className="md:w-1/2 mx-auto">
          <Slide top>
            <h3 className="text-2xl text-white">Create Review</h3>
          </Slide>
          <Formik
            initialValues={{
              company: '',
              company_email: '',
              sector: ''
            }}
            validationSchema={reviewSchema}
            onSubmit={(values, { setSubmitting }) => {
              const payload = {
                sector: getIdForNameInArray(sectors, values.sector),
                company: getIdForNameInArray(companies, values.company),
                review: reviews,
                company_email: values.company_email
              }

              if(values.company_email){
                APIClient.post('reviews/verifyEmail', {email: values.company_email})
                .then(response => {
                  // console.log(response)
                  if(response.data.statusCode === 200){
                    if(!response.data.data.isValid){
                      return;
                    }
                  }
                })
                .catch( error => {
                  // console.log(error)
                  return;
                })
              }
              APIClient.post('reviews', payload)
                .then(response => {
                  setSubmitting(false)
                  if (response.data.statusCode === 201) {
                    if(getCompanyIndex(companies, companySelector(values.company)) > -1){
                      fetchCompanies()
                    } else {
                      notifySuccess()
                      dispatch(toggleCreateReviewModal(false))
                    }
                  }
                })
                .catch(error => {
                  setSubmitting(false)
                  if (error.response.data.statusCode === 400) {
                    notifyError('Unable to cast review')
                  } else {
                    notifyError('Kindly reach out to admin')
                  }
                })
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting
            }) => (

              <form onSubmit={e => {
                e.preventDefault()
                // handleSubmit(e)
                const hasError = testReviews()
                reviewHasErrorSet(hasError)
                if (!hasError) handleSubmit(e)
              }}>
                <Slide top>
                  <div className="flex flex-col mb-2">
                    <label htmlFor="company" className="text-white mb-2">Select Company</label>
                    <HeadShake when={(_.has(touched, 'company') && _.has(errors, 'company'))}>
                      <input list="companies" name="company" id="company" className={`w-auto p-2 rounded ${(_.has(touched, 'company') && _.has(errors, 'company')) && 'form--error'}`} 
                      value={values.company} onChange={handleChange} onBlur={() => {addExistingCompanySector(companies, values)}} autoFocus tabIndex="0"/>
                    </HeadShake>
                    <datalist id="companies">
                      { companies && companies.map((company) => <option key={getKey()} value={company.name}/>)}
                    </datalist>
                    <Fade bottom collapse when={(_.has(touched, 'company')) && (_.has(errors, 'company'))}>
                      <span className="text-xs text-yellow-400">Oh, you forgot your company?</span>
                    </Fade>
                  </div>
                </Slide>
                {/* {
                  // if the company input has been touched and its empty show this
                  _.eq(values.company, 'Add New Company') && _.has(touched, 'company') && (
                    <Slide top>
                      <div className="flex flex-col mt-2">
                        <label htmlFor="company_name" className="text-white mb-2">Company's Name</label>
                        <input type="text" name="company_name" placeholder="sam@ex.com" className="w-auto p-2 rounded" />
                      </div>
                    </Slide>
                  )
                } */}

                <Slide top>
                  <div className="flex flex-col mt-2">
                    <div className="flex flex-row mb-2 justify-between items-center">
                      <label htmlFor="sector" className="text-white ">Sector Company Belongs</label>
                      <Link href="/faq">
                        <a onClick={closeModal} title="Help"><InfoIcon width={16} height={16} fill="#fff" /></a>
                      </Link>
                    </div>
                    
                    
                    <HeadShake when={(_.has(touched, 'sector') && _.has(errors, 'sector'))}>
                      <input ref={ el => {sectorInputRef.current = el}} list="sectors" name="sector" id="sector" className={`w-auto p-2 rounded ${_.has(touched, 'sector') && _.has(errors, 'sector') && 'form--error'}`} value={values.sector} onChange={handleChange} autoFocus tabIndex="0"/>
                    </HeadShake>
                    <datalist id="sectors">
                      {
                        sectors && sectors.map((sector) => (<option key={getKey()} value={sector.name}/>))
                      }
                    </datalist>
                  </div>
                  <Fade bottom collapse when={(_.has(touched, 'sector')) && (_.has(errors, 'sector'))}>
                    <span className="text-xs text-yellow-400">Oh, make a choice.</span>
                  </Fade>
                </Slide>

                <div className="flex flex-col mt-2">
                  <p htmlFor="answer" className="text-white mb-2">Be Concise.</p>
                  <Slide right>
                    <div className="flex flex-row  mt-2">
                      <div className="flex-shrink-0 mt-1">
                        <InfoIcon width={16} height={16} fill="#fff" />
                      </div>
                      <p className="text-sm text-white ml-2">Writing a bad review, try not to get too personal so it can't be traced to you.</p>
                    </div>
                  </Slide>
                  <ReviewsTextArea reviewHasError={reviewHasError} takeValues={takeValues} />

                </div>
                
                <div className="flex flex-col mt-2">
                  <Slide top>
                    <label htmlFor="company_email" className="text-white mb-2">Email at company (Optional)</label>
                    <HeadShake when={_.has(touched, 'company_email') && _.has(errors, 'company_email')}>
                      <input type="email" name="company_email" placeholder="sam@ex.com" className={`w-full p-2 rounded ${_.has(touched, 'company_email') && _.has(errors, 'company_email') && 'form--error'}`} value={values.company_email} onChange={handleChange} />
                    </HeadShake>
                    <Fade bottom collapse when={(_.has(touched, 'company_email')) && (_.has(errors, 'company_email'))}>
                      <span className="text-xs text-yellow-400">Oh, email isn't valid!</span>
                    </Fade>
                  </Slide>
                  <Slide bottom>
                    <div className="flex flex-row  mt-2">
                      <div className="flex-shrink-0 mt-1">
                        <PrivacyIcon width={16} height={17} fill="#fff" />
                      </div>
                      <p className="text-sm text-white ml-2">Your email address is confidential. SafeSpace will NOT send any email to this account and it will never be shared . SafeSpace uses your company's email to verify your review.</p>
                    </div>
                  </Slide>
                </div>
                { isSubmitting ? (<Progress />)
                  : (<Slide right>
                    <div className="flex flex-row justify-between items-center mt-4">
                      <button className="button button--primary bg-teal-600" disabled={isSubmitting} type="submit">Cast it</button>
                    </div>
                  </Slide>)}
              </form>

            )}
          </Formik>
        </div>
      </Modal>) : <></>
  )
}

CreateReviewModal.propTypes = {}

export default CreateReviewModal
