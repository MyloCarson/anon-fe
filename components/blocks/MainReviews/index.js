import React from 'react'
import { ReviewItem } from 'components/blocks'
import { getKey } from 'utils'
import PropTypes from 'prop-types'
import * as _ from 'lodash'
const MainReviews = ({ reviews }) => {

  return (
    <>
      {
        reviews && reviews.length > 0 && reviews.map((review, index) => (<ReviewItem key={getKey()} review={review} />))
      }
    </>
  )
}

MainReviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape(
      {
        _id: PropTypes.string.isRequired,
        review: PropTypes.arrayOf(PropTypes.string).isRequired,
        verifiedByUser: PropTypes.bool.isRequired,
        verifiedByAdmin: PropTypes.bool.isRequired,
        company: PropTypes.shape({
          name: PropTypes.string.isRequired
        }),
        user: {
          verified: PropTypes.bool.isRequired,
          name: PropTypes.string.isRequired,
          public_id: PropTypes.string.isRequired,
          __v: PropTypes.number
        },
        createdAt: PropTypes.string.isRequired,
        __v: PropTypes.number
      }
    ).isRequired
  )
}

export default MainReviews
