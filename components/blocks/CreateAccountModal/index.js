import React, { useState } from 'react'
import { Modal } from 'components/blocks'
import PropTypes from 'prop-types'
import { toggleCreateAccountModal, toggleCreateReviewModal } from '../../../actions'
import { useDispatch, useSelector } from 'react-redux'
import { InfoIcon } from 'components/vectors'
import HeadShake from 'react-reveal/HeadShake'
import RubberBand from 'react-reveal/RubberBand'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'
import { Formik } from 'formik'
import * as Yup from 'yup'
import * as _ from 'lodash'

const createAnonSchema = Yup.object().shape({
  secret_question: Yup.string()
    .required('Required'),
  secret_answer: Yup.string()
    .min(10, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required')
})

const loginSchema = Yup.object().shape({
  secret_question: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  secret_answer: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  token: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required')
})

const CreateAccountModal = () => {
  const showCreateAccountModal = useSelector((state) => state.showCreateAccountModal)
  const dispatch = useDispatch()
  const closeModal = (value) => dispatch(toggleCreateAccountModal(value))
  const [hasAccount, hasAccountSet] = useState(false)
  return (
    showCreateAccountModal
      ? (<Modal onClose={() => { closeModal(false) }}>
        <div className="md:w-1/2 mx-auto">
          <Slide top>
            <h3 className="text-2xl text-white">{ !hasAccount ? 'Create Anon' : 'Take me in' }</h3>
          </Slide>
          <Formik
            initialValues={{
              secret_question: '',
              secret_answer: '',
              token: ''
            }}
            validationSchema={!hasAccount ? createAnonSchema : loginSchema }
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
              <form onSubmit={handleSubmit}>
                <Slide top>
                  <div className="flex flex-col mb-2">
                    <label htmlFor="secret_question" className="text-white mb-2">Secret Question</label>
                    <HeadShake when={_.has(touched, 'secret_question') && _.has(errors, 'secret_question')}>
                      <select name="secret_question" className={`w-auto p-2 rounded ${_.has(touched, 'secret_question') && _.has(errors, 'secret_question') && 'form--error'}`} value={values.secret_question} onChange={handleChange}>
                        <option value="">Select Secret Question</option>
                        <option value="1">What is the first name of the boy or girl that you first kissed?</option>
                        <option value="12">What is the name of a college you applied to but didn't attend?</option>
                        <option value="13">In what city did you meet your spouse/significant other?</option>
                        <option value="14">What is the name of your favorite childhood friend?</option>
                      </select>
                    </HeadShake>
                    <Fade bottom collapse when={(_.has(touched, 'secret_question')) && (_.has(errors, 'secret_question'))}>
                      <span className="text-xs text-yellow-400">Oh, please choose a question!</span>
                    </Fade>
                  </div>
                </Slide>
                <Slide top>
                  <div className="flex flex-col mt-2">
                    <label htmlFor="secret_answer" className="text-white mb-2">Answer</label>
                    <HeadShake when={_.has(touched, 'secret_answer') && _.has(errors, 'secret_answer')}>
                      <input type="text" name="secret_answer" className={`w-auto p-2 rounded ${(_.has(touched, 'secret_answer')) && (_.has(errors, 'secret_answer')) && 'form--error'} `} placeholder="Answer to question" value={values.secret_answer} onChange={handleChange}/>
                    </HeadShake>
                    <Fade bottom collapse when={(_.has(touched, 'secret_answer')) && (_.has(errors, 'secret_answer'))}>
                      <span className="text-xs text-yellow-400">Oh, answer too short!</span>
                    </Fade>
                  </div>
                </Slide>
                { hasAccount && (
                  <Slide top>
                    <div className="flex flex-col mt-2">
                      <label htmlFor="token" className="text-white mb-2">Token</label>
                      <HeadShake when={(_.has(touched, 'token')) && (_.has(errors, 'token'))}>
                        <input type="text" name="token" className={`w-auto p-2 rounded ${(_.has(touched, 'token')) && (_.has(errors, 'token')) && 'form--error'}`} placeholder="Token" value={values.token} onChange={handleChange}/>
                      </HeadShake>
                      <Fade bottom collapse when={(_.has(touched, 'token')) && (_.has(errors, 'token'))}>
                        <span className="text-xs text-yellow-400">Oh, token too short!</span>
                      </Fade>
                    </div>
                  </Slide>
                )}
                <div className="flex flex-col md:flex-row justify-between  mt-4">
                  <Slide right>
                    <RubberBand when={isSubmitting}>
                      <button className="button button--primary w-full md:w-auto mb-2 md:b-0" type="submit" disabled={isSubmitting}>{ !hasAccount ? 'Create Anon' : 'Take me in!'}</button>
                    </RubberBand>
                  </Slide>
                  <Slide right>
                    <RubberBand when={hasAccount}>
                      <div className="button button--primary " onClick={() => { hasAccountSet(!hasAccount) }}>{hasAccount ? 'I don\'t have an account' : ' I have an account'}</div>
                    </RubberBand>
                  </Slide>
                </div>
              </form>
            )}
          </Formik>

          <Slide bottom>
            <div className="flex flex-row mt-24">
              <InfoIcon width={24} height={24} fill="#fff" />
              <p className="text-sm text-white  ml-4">It is important to remember your secret question and answer, if you intend to use this same anon.</p>
            </div>
          </Slide>
        </div>
      </Modal>) : <></>
  )
}

CreateAccountModal.propTypes = {}

export default CreateAccountModal
