import React, { useState, memo } from 'react'
import { ReviewsTextArea, Modal, Button } from 'components/blocks'
import { getKey } from 'utils'
import { toggleCreateReviewModal } from '../../../actions'
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

const CreateReviewModal = () => {
  const showCreateReviewModal = useSelector((state) => state.showCreateReviewModal)
  const [reviews, reviewsSet] = useState([''])
  const [reviewHasError, reviewHasErrorSet] = useState(false)

  // const nReview = useSelector((state) => state.newReview);

  const dispatch = useDispatch()

  // const addReview = (review) => dispatch(addNewReview(review))
  // const addInitialReview = (review) => dispatch(addFirstReview(review))
  const closeModal = (value) => dispatch(toggleCreateReviewModal(value))

  const postReview = () => {
    event.preventDefault()
    closeModal(false)
  }

  const takeValues = values => memo(reviewsSet(values), [values])
  const lessThanRequiredText = text => text.length < 10
  const testReviews = () => {
    if (lessThanRequiredText(reviews[0])) return true
    return reviews.every(lessThanRequiredText)
  }

  const reviewSchema = Yup.object().shape({
    company: Yup.string()
      .required('Required'),
    sector: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    reviews: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    company_email: Yup.string()
      .email('Invalid')
  })

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
            onSubmit={values => {
              // same shape as initial values
              console.log(values)
              closeModal(false)
              dispatch(toggleCreateReviewModal(true))
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

              <form onSubmit={e => e.preventDefault()}>
                <Slide top>
                  <div className="flex flex-col mb-2">
                    <label htmlFor="company" className="text-white mb-2">Select Company</label>
                    <HeadShake when={(_.has(touched, 'company') && _.has(errors, 'company'))}>
                      <input list="companies" name="company" id="company" className={`w-auto p-2 rounded ${(_.has(touched, 'company') && _.has(errors, 'company')) && 'form--error'}`} value={values.company} onChange={handleChange} />
                    </HeadShake>
                    <datalist id="companies">
                      <option value="Add New Company"></option>
                      <option value="konga"/>
                      <option value="KPMG"/>
                      <option value="Jumia"/>
                      <option value="Uber"/>
                    </datalist>
                    <Fade bottom collapse when={(_.has(touched, 'company')) && (_.has(errors, 'company'))}>
                      <span className="text-xs text-yellow-400">Oh, you forgot your company?</span>
                    </Fade>
                  </div>
                </Slide>
                {
                  // if the company input has been touched and its empty show this
                  _.eq(values.company, 'Add New Company') && _.has(touched, 'company') && (
                    <Slide top>
                      <div className="flex flex-col mt-2">
                        <label htmlFor="company_name" className="text-white mb-2">Company's Name</label>
                        <input type="text" name="company_name" placeholder="sam@ex.com" className="w-auto p-2 rounded" />
                      </div>
                    </Slide>
                  )
                }

                <Slide top>
                  <div className="flex flex-col mt-2">
                    <label htmlFor="sector" className="text-white mb-2">Sector Company Belongs</label>
                    <HeadShake when={(_.has(touched, 'sector') && _.has(errors, 'sector'))}>
                      <input list="sectors" name="sector" id="sector" className={`w-auto p-2 rounded ${_.has(touched, 'sector') && _.has(errors, 'sector') && 'form--error'}`} value={values.sector} onChange={handleChange} />
                    </HeadShake>
                    <datalist id="sectors">
                      <option value="Engineering"/>
                      <option value="Health Care"/>
                      <option value="Government"/>
                      <option value="Others"/>
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
                      <p className="text-sm text-white ml-2">Writing a bad review, try not to get too personal so it can't be raced to you.</p>
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
                      <p className="text-sm text-white ml-2">Your email address is confidential and will never be shared. Anon uses your company's email to verify your review.</p>
                    </div>
                  </Slide>
                </div>
                <Slide right>
                  <div className="flex flex-row justify-between items-center mt-4">
                    <button className="button button--primary" type="button" onClick={ () => {
                      const hasError = testReviews()
                      console.log(hasError)
                      hasError ? reviewHasErrorSet(hasError) : handleSubmit()
                    }}>Cast it</button>
                  </div>
                </Slide>
              </form>

            )}
          </Formik>
        </div>
      </Modal>) : <></>
  )
}

CreateReviewModal.propTypes = {}

export default CreateReviewModal
