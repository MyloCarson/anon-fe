import React from 'react'
import Fade from 'react-reveal/Fade'
import PropTypes from 'prop-types'
import moment from 'moment'

const CommentItem = ({ comment }) => (
  <Fade top cascade>
    <li className="text-white text-sm my-2 border-gray-600 border-b-2 last:border-0 pb-3 last:pb-0">
      <p className="text-gray-300">{comment.comment}</p>
      <div className="mt-2">
        <span className="block text-left text-gray-600"><span className="text-xs">by</span> {comment.author}</span>
        <span className="block text-left text-gray-600">{moment(comment.createdAt).format('Do MMMM YYYY, hh:mm a')}</span>
      </div>
    </li>
  </Fade>
)

CommentItem.propTypes = {
  comment: PropTypes.shape({
    _id: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  review: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string,
  __v: PropTypes.number
  })
}

export default CommentItem
