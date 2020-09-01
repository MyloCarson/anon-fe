import React, { useState } from 'react'
import { Modal, Progress } from 'components/blocks'
import PropTypes from 'prop-types'
import { toggleCreateAccountModal, toggleCreateReviewModal, toggleLoggedIn } from '@actions'
import { useDispatch, useSelector } from 'react-redux'
import { InfoIcon } from 'components/vectors'
import HeadShake from 'react-reveal/HeadShake'
import RubberBand from 'react-reveal/RubberBand'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'
import { Formik } from 'formik'
import * as Yup from 'yup'
import * as _ from 'lodash'
import APIClient from 'utils/APIClient'
import { storeUser, toastConfig } from 'utils'
import { toast } from 'react-toastify'
import Router from 'next/router'

const createAnonSchema = Yup.object().shape({
  email: Yup.string()
    .email('Bad email address')
    .required('Oh, you forgot!'),
  password: Yup.string()
    .min(4, 'Oh, too short.')
    .required('Oh, you forgot!'),
  confirmPassword: Yup.string()
    .min(4, 'Oh, too short')
    .required('Oh, you forgot!')
    .oneOf([Yup.ref('password'), null], 'Sorry, it doesnt\t match password.')
})

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Bad email address').required('Oh, you forgot!'),
  password: Yup.string()
    .min(4, 'Oh, too short!')
    .required('Oh, you forgot!')
})

const forgotSchema = Yup.object().shape({
  email: Yup.string().email('Bad email address').required('Oh, you forgot!')
})

const CreateAccountModal = () => {
  const showCreateAccountModal = useSelector((state) => state.showCreateAccountModal)
  const dispatch = useDispatch()
  const closeModal = (value) => dispatch(toggleCreateAccountModal(value))
  const setLoggedIn = (value) => dispatch(toggleLoggedIn(value))
  const [hasAccount, hasAccountSet] = useState(true)
  const [hasForgotPassword, hasForgotPasswordSet] = useState(false)
  const notifySuccess = (message = '🥳 Yay!!!!') => toast.success(message, toastConfig)
  const notifyError = (message) => toast.error(`😟😟, ${message}`, toastConfig)
  return (
    showCreateAccountModal
      ? (<Modal onClose={() => { closeModal(false) }}>
        <div className="md:w-1/2 mx-auto">
          <Slide top>
            <h3 className="text-2xl text-white">{ !hasAccount ? 'Create SafeSpace' : !hasForgotPassword ? 'Take me in' : 'Forgot Password' }</h3>
          </Slide>
          <Slide bottom>
            <div className="flex flex-row my-4">
              <InfoIcon width={24} height={24} fill="#fff" />
              <p className="text-sm text-white  ml-4">SafeSpace will <span className="font-bold uppercase">never</span> share your email address to the public. Your email address is used for login purposes only.</p>
            </div>
          </Slide>
          <Formik
            initialValues={{
              email: '',
              password: '',
              confirmPassword: ''
            }}
            validationSchema={!hasAccount ? createAnonSchema : !hasForgotPassword ? loginSchema : forgotSchema }
            onSubmit={(values, { setSubmitting }) => {
              const payload = !hasForgotPassword ? {
                email: values.email,
                password: values.password
              } : { email: values.email }
              const link = !hasAccount ? 'users/create' : !hasForgotPassword ? 'users/login' : 'users/forgot'
              APIClient.post(link, payload)
                .then(response => {
                  setSubmitting(false)
                  if (response.data.statusCode === 200) {
                    if (!hasForgotPassword) {
                      notifySuccess()
                      storeUser(response.data.data)
                      const timeout = setTimeout(() => {
                        Router.reload('/')
                        clearTimeout(timeout)
                      }, 1500);
                      // dispatch(toggleCreateReviewModal(true))
                      setLoggedIn(true)
                    } else {
                      notifySuccess(response.data.data.message)
                    }
                    
                  }

                  if(response.data.statusCode === 201){
                    notifySuccess(response.data.data)
                  }

                  closeModal(false)
                })
                .catch(error => {
                  setSubmitting(false)
                  const errMessage = error.response.data.payload.message
                  const message = errMessage.includes(':') ? errMessage.substr(errMessage.lastIndexOf(':') + 2) : errMessage
                  notifyError(message)
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
              <form onSubmit={handleSubmit}>
                <Slide top>
                  <div className="flex flex-col mb-2">
                    <label htmlFor="email" className="text-white mb-2">Email</label>
                    <HeadShake when={(_.has(touched, 'email')) && (_.has(errors, 'email'))}>
                      <input type="email" name="email" className={`w-auto p-2 rounded ${(_.has(touched, 'email')) && (_.has(errors, 'email')) && 'form--error'}`} placeholder="email address" value={values.email} onChange={handleChange}/>
                    </HeadShake>
                    <Fade bottom collapse when={(_.has(touched, 'email')) && (_.has(errors, 'email'))}>
                      <span className="text-xs text-yellow-400">{errors.email}</span>
                    </Fade>
                  </div>
                </Slide>
                {
                  !hasForgotPassword && (
                    <Slide top>
                      <div className="flex flex-col mt-6">
                        <label htmlFor="password" className="text-white mb-2">Password</label>
                        <HeadShake when={_.has(touched, 'password') && _.has(errors, 'password')}>
                          <input type="password" name="password" className={`w-auto p-2 rounded ${(_.has(touched, 'password')) && (_.has(errors, 'password')) && 'form--error'} `} placeholder="* * * * * * *" value={values.password} onChange={handleChange}/>
                        </HeadShake>
                        <Fade bottom collapse when={(_.has(touched, 'password')) && (_.has(errors, 'password'))}>
                          <span className="text-xs text-yellow-400">{errors.password}</span>
                        </Fade>
                      </div>
                    </Slide>
                  )
                }
                { !hasAccount && !hasForgotPassword && (
                  <Slide top>
                    <div className="flex flex-col mt-6">
                      <label htmlFor="confirmPassword" className="text-white mb-2">Confirm Password</label>
                      <HeadShake when={(_.has(touched, 'confirmPassword')) && (_.has(errors, 'confirmPassword'))}>
                        <input type="password" name="confirmPassword" className={`w-auto p-2 rounded  ${(_.has(touched, 'confirmPassword')) && (_.has(errors, 'confirmPassword')) && 'form--error'}`} placeholder="* * * * * * *" value={values.confirmPassword} onChange={handleChange}/>
                      </HeadShake>
                      <Fade bottom collapse when={(_.has(touched, 'confirmPassword')) && (_.has(errors, 'confirmPassword'))}>
                        <span className="text-xs text-yellow-400">{errors.confirmPassword}</span>
                      </Fade>
                    </div>
                  </Slide>
                )}
                { isSubmitting ? (
                  <Progress />
                )
                  : (
                    <>
                      <div className="flex flex-col md:flex-row justify-between  mt-8">
                        <Slide right>
                          <RubberBand when={isSubmitting}>
                            <button className="button button--primary w-full md:w-auto mb-2 md:b-0 bg-teal-600" type="submit" disabled={isSubmitting}>{ !hasAccount ? 'Create SafeSpace' : !hasForgotPassword ? 'Take me in!' : 'Send Reset Link'}</button>
                          </RubberBand>
                        </Slide>
                        <Slide right>
                          <RubberBand when={hasAccount}>
                            <div className="button button--primary " disabled={isSubmitting} onClick={() => { hasAccountSet(!hasAccount); hasForgotPasswordSet(false) }}>{hasAccount ? 'I don\'t have an account' : ' I have an account'}</div>
                          </RubberBand>
                        </Slide>
                      </div>
                      <div className="flex flex-col md:flex-row justify-between  mt-2 md:mt-8">
                        <Slide right>
                          <RubberBand when={isSubmitting}>
                            <button className="button button--primary w-full md:w-auto mb-2 md:b-0" type="button" disabled={isSubmitting} onClick={() => { hasForgotPasswordSet(!hasForgotPassword) }}>Forgot Password</button>
                          </RubberBand>
                        </Slide>
                      </div>
                    </>
                  )}

              </form>
            )}
          </Formik>
        </div>
      </Modal>) : <></>
  )
}

CreateAccountModal.propTypes = {}

export default CreateAccountModal
