import React from 'react'
import { CloseIcon } from 'components/vectors'
import PropTypes from 'prop-types'

const Modal = ({ children, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-overlay"></div>
      <div className="modal-content flex flex-col w-full md:max-w-screen-md md:mx-auto py-16 px-5 md:px-24 lg:px-0">
        <div className="ml-auto my-4 cursor-pointer" onClick={onClose}>
          <CloseIcon width={18} height={18} fill="#fff" />
        </div>

        <div className="w-full">
          {children}
        </div>

      </div>
    </div>
  )
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired
}

export default Modal
