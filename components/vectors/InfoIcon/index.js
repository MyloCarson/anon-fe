import React from 'react'
import PropTypes from 'prop-types'

const InfoIcon = ({ width = 496, height = 496, fill = 'black' }) => (
  <svg width={width} height={height} viewBox="0 0 496 496" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M248 0C111.043 0 0 111.083 0 248C0 384.997 111.043 496 248 496C384.957 496 496 384.997 496 248C496 111.083 384.957 0 248 0ZM248 110C271.196 110 290 128.804 290 152C290 175.196 271.196 194 248 194C224.804 194 206 175.196 206 152C206 128.804 224.804 110 248 110ZM304 364C304 370.627 298.627 376 292 376H204C197.373 376 192 370.627 192 364V340C192 333.373 197.373 328 204 328H216V264H204C197.373 264 192 258.627 192 252V228C192 221.373 197.373 216 204 216H268C274.627 216 280 221.373 280 228V328H292C298.627 328 304 333.373 304 340V364Z" fill={fill}/>
  </svg>

)

InfoIcon.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  fill: PropTypes.string
}

export default InfoIcon
