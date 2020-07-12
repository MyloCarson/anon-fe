import React from 'react'
import { Card, Progress } from 'components/blocks'
import { countText, toastConfig } from 'utils'
import HeadShake from 'react-reveal/HeadShake'
import Fade from 'react-reveal/Fade'
import APIClient from '../../../utils/APIClient'
import { Formik } from 'formik'
import * as Yup from 'yup'
import * as _ from 'lodash'
import PropTypes from 'prop-types'
import { toast } from 'react-toastify'

const postCommentSchema = Yup.object().shape({
  comment: Yup.string()
    .min(2, 'Ohh, thats too short')
    .required('Oh, empty comment??')
})
const notifySuccess = () => toast.success('🥳, Comment sent!!', toastConfig)
const notifyError = (message) => toast.error(`😟😟, ${message}`, toastConfig)
const CommentForm = ({ reviewId }) => {
  return (
    <Card>
      <div className="p-4">
        <Formik
          initialValues= {{
            comment: ''
          }}
          validationSchema={postCommentSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitting(true)
            const payload = {
              comment: values.comment,
              review: reviewId
            }
            APIClient.post('comments', payload)
              .then(response => {
                setSubmitting(false)
                if (response.data.statusCode === 201) {
                  notifySuccess()
                  resetForm()
                }
              })
              // eslint-disable-next-line handle-callback-err
              .catch(error => {
                setSubmitting(false)
                notifyError('Sorry, problem encountered!')
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
            <>
              <HeadShake when={(_.has(touched, 'comment') && _.has(errors, 'comment'))}>
                <form onSubmit={handleSubmit}>
                  <textarea name="comment" className="resize-none w-full p-2 bg-transparent outline-none focus:shadow-outline rounded-sm text-white h-20"
                    placeholder="Comment" maxLength="160" value={values.comment} onChange={handleChange}></textarea>
                  <Fade bottom collapse when={(_.has(touched, 'comment') && _.has(errors, 'comment'))}>
                    <span className="text-xs text-left text-yellow-400">{errors.comment}</span>
                  </Fade>
                  <span className="block text-right"><span className="text-green-600">{countText(values.comment)}</span><span className="text-white">/160</span></span>
                  {
                    !isSubmitting ? (
                      <div className="mt-3">
                        <button className="ml-auto button button--primary" type="submit" disabled={isSubmitting} label="ADD COMMENT">ADD COMMENT</button>
                      </div>
                    ) : (
                      <Progress />
                    )
                  }
                </form>
              </HeadShake>
            </>
          )}

        </Formik>
      </div>
    </Card>
  )
}

CommentForm.propTypes = {
  reviewId: PropTypes.string.isRequired,
  // onComment: PropTypes.func.isRequired
}

export default CommentForm
