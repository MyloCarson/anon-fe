import React, { useState } from 'react'
import { Progress } from 'components/blocks'
import DefaultLayout from 'components/layout/DefaultLayout'
import Router, { useRouter } from 'next/router'
import APIClient from 'utils/APIClient'

import HeadShake from 'react-reveal/HeadShake'
import RubberBand from 'react-reveal/RubberBand'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'
import { Formik } from 'formik'

import * as Yup from 'yup'
import * as _ from 'lodash'
import { storeUser, toastConfig } from 'utils'
import { toast } from 'react-toastify'

const resetSchema = Yup.object().shape({
  password: Yup.string()
    .min(4, 'Oh, too short.')
    .required('Oh, you forgot!'),
  confirmPassword: Yup.string()
    .min(4, 'Oh, too short')
    .required('Oh, you forgot!')
    .oneOf([Yup.ref('password'), null], 'Sorry, it doesnt\t match password.')
})

const notifySuccess = (message = '🥳 Yay!!!!') => toast.success(message, toastConfig)
const notifyError = (message) => toast.error(`😟😟, ${message}`, toastConfig)

const ResetPassword = () => {
  const { query } = useRouter()

  return (
    <DefaultLayout>
      <main className="w-screen pt-5 pb-16 px-4 xl:px-0">
        <div className="sm:max-w-full mx-auto md:w-2/4 lg:w-1/4">
          <Slide top>
            <h3 className="text-2xl text-white mt-5">Reset Password</h3>
          </Slide>
          <Formik
            initialValues={{
              email: '',
              password: '',
              confirmPassword: ''
            }}
            validationSchema={resetSchema }
            onSubmit={(values, { setSubmitting }) => {
              const payload = {
                resetToken: query.reset,
                password: values.password
              }
              const link = 'users/reset'
              APIClient.post(link, payload)
                .then(response => {
                  setSubmitting(false)
                  if (response.data.statusCode === 200) {
                    notifySuccess()
                    storeUser(response.data.data)
                    Router.push('/')
                  }
                })
                .catch(error => {
                  setSubmitting(false)
                  const errMessage = error.response.data.payload.message
                  notifyError(errMessage)
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
                { isSubmitting ? (
                  <Progress />
                )
                  : (
                    <>
                      <div className="flex flex-col md:flex-row justify-between  mt-8">
                        <Slide right>
                          <RubberBand when={isSubmitting}>
                            <button className="button button--primary w-full md:w-auto mb-2 md:b-0" type="submit" disabled={isSubmitting}>Reset</button>
                          </RubberBand>
                        </Slide>

                      </div>

                    </>
                  )}

              </form>
            )}
          </Formik>
        </div>
      </main>
    </DefaultLayout>
  )
}

export default ResetPassword
