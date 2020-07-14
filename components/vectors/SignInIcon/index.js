import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { toggleCreateAccountModal } from '@actions'


const SignInIcon = ({ width = 512, height = 393, fill = 'black' }) => {
  const dispatch = useDispatch()
  const openAccountModal = () => dispatch(toggleCreateAccountModal(true))
  return (
    <svg onClick={openAccountModal} width={width} height={height} viewBox="0 0 512 393" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M416 384H332C325.4 384 320 378.6 320 372V332C320 325.4 325.4 320 332 320H416C433.7 320 448 305.7 448 288V96C448 78.3 433.7 64 416 64H332C325.4 64 320 58.6 320 52V12C320 5.4 325.4 0 332 0H416C469 0 512 43 512 96V288C512 341 469 384 416 384ZM369 183L201 15C186 0 160 10.5 160 32V128H24C10.7 128 0 138.7 0 152V248C0 261.3 10.7 272 24 272H160V368C160 389.5 186 400 201 385L369 217C378.3 207.6 378.3 192.4 369 183Z" fill={fill}/>
    </svg>
    
  
  )
  
}
SignInIcon.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  fill: PropTypes.string
}

export default SignInIcon
