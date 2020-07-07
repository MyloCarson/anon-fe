import React from 'react'
import PropTypes from 'prop-types'

const MoreCommentIcon = ({ width = 320, height = 512, fill = 'black' }) => (
  <svg width={width} height={height} viewBox="0 0 320 512" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M295.972 160H180.571L215.189 30.184C219.249 14.956 207.755 0 191.999 0H55.9994C43.9704 0 33.7994 8.905 32.2104 20.828L0.214408 260.828C-1.70459 275.217 9.50341 288 24.0034 288H142.704L96.6454 482.466C93.0494 497.649 104.658 512 119.991 512C128.341 512 136.367 507.626 140.769 500.022L316.742 196.025C325.986 180.058 314.454 160 295.972 160Z" fill={fill}/>
  </svg>

)

MoreCommentIcon.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  fill: PropTypes.string
}

export default MoreCommentIcon
