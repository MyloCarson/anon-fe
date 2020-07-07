import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ label, onClick }) => (
  <div className="button button--primary" onClick={onClick}>{label}</div>
)

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}
export default Button
