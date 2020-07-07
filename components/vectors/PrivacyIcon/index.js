import React from 'react'
import PropTypes from 'prop-types'

const PrivacyIcon = ({ width = 480, height = 512, fill = 'black' }) => (
  <svg width={width} height={height} viewBox="0 0 480 512" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M480 128C480 349.282 344.066 472.645 258.461 508.308C252.611 510.746 246.337 512.001 239.999 512.001C233.662 512.001 227.388 510.746 221.538 508.308C114.495 463.713 0 326.487 0 128C-1.6453e-05 118.524 2.80506 109.259 8.06172 101.374C13.3184 93.4895 20.7914 87.337 29.539 83.6923L221.539 3.69229C227.389 1.2549 233.663 0 240 0C246.338 0 252.612 1.2549 258.462 3.69229L450.462 83.6923C459.209 87.3372 466.682 93.4897 471.939 101.375C477.195 109.259 480 118.524 480 128ZM240 446.313L240.066 446.347C333.801 399.658 412.563 290.039 415.883 138.618L240 65.3333V446.313Z" fill={fill}/>
  </svg>

)

PrivacyIcon.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  fill: PropTypes.string
}

export default PrivacyIcon
