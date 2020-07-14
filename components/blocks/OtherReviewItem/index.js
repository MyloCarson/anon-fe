import React from 'react'
import Fade from 'react-reveal/Fade'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { removeUrl } from 'utils'

const OtherReviewItem = ({ review }) => (
  <Fade top cascade>
    <li className="text-white text-sm my-2">
      <Link href="/review">
        <a className="text-gray-300">{removeUrl(review.review[0])}</a>
      </Link>
      <span className="block text-right text-gray-600">by {review.user.name}</span>
    </li>
  </Fade>
)

OtherReviewItem.propTypes = {
  comments: PropTypes.number,
  review: PropTypes.shape(
    {
      _id: PropTypes.string.isRequired,
      review: PropTypes.arrayOf(PropTypes.string.isRequired),
      verifiedByUser: PropTypes.bool.isRequired,
      verifiedByAdmin: PropTypes.bool.isRequired,
      company_email: PropTypes.string,
      company: {
        name: PropTypes.string.isRequired
      },
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
}

export default OtherReviewItem
