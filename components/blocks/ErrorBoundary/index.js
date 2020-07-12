import React from 'react'
import PropTypes from 'prop-types'

const ErrorBoundary = ({ message }) => <p className="text-lg text-white text-center">{message}</p>

ErrorBoundary.propTypes = {
  message: PropTypes.string.isRequired
}
export default ErrorBoundary
