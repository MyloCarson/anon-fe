import React from 'react'
import PropTypes from 'prop-types'

const JobIcon = ({ width = 512, height = 448, fill = 'black' }) => (
  <svg width={width} height={height} viewBox="0 0 512 448" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M96 448H416V96H384V48C384 21.49 362.51 0 336 0H176C149.49 0 128 21.49 128 48V96H96V448ZM192 64H320V96H192V64ZM512 144V400C512 426.51 490.51 448 464 448H448V96H464C490.51 96 512 117.49 512 144ZM64 448H48C21.49 448 0 426.51 0 400V144C0 117.49 21.49 96 48 96H64V448Z" fill={fill}/>
  </svg>

)

JobIcon.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  fill: PropTypes.string
}

export default JobIcon
