import React, { useState, memo } from 'react'
import { TextArea, Button } from 'components/blocks'
import Slide from 'react-reveal/Slide'
import HeadShake from 'react-reveal/HeadShake'
import { getKey } from 'utils'
import PropTypes from 'prop-types'

const ReviewsTextArea = ({ reviewHasError, takeValues }) => {
  const [reviews, reviewsSet] = useState([''])
  const [errors, errorsSet] = useState([false])
  const addMore = () => {
    // if (reviews.length === 1) {
    //   console.log(reviews)
    //   // addInitialReview(reviews)
    // } else {
    if (reviews[reviews.length - 1].length === 160) {
      // addReview('')
      reviewsSet([...reviews, ''])
      // console.log(reviews)
    }
    // }
  }
  const handleChange = (value, index) => {
    const _review = reviews
    _review[index] = value
    reviewsSet(_review)

    takeValues(reviews) // send all values
  }
  return (
    <>
      {
        reviews.map((review, index) =>
          <Slide top key={getKey()}>
            <HeadShake when={errors[index] || reviewHasError}>
              <TextArea value={review} onChange={(value) => { handleChange(value, index) }} error={reviewHasError} />
            </HeadShake>
          </Slide>)
      }
      <Slide left>
        <div className="flex flex-row justify-end mt-4">
          <Button label="More" onClick={addMore} />
        </div>
      </Slide>
    </>
  )
}

ReviewsTextArea.propTypes = {
  reviewHasError: PropTypes.bool.isRequired,
  takeValues: PropTypes.func.isRequired
}

export default memo(ReviewsTextArea)
