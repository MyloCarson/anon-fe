import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { toggleCreateAccountModal } from '@actions'


const SignInIcon = ({ width = 512, height = 393, fill = 'black' }) => {
  const dispatch = useDispatch()
  const openAccountModal = () => dispatch(toggleCreateAccountModal(true))
  return (
    <svg onClick={openAccountModal} width={width} height={height} viewBox="0 0 496 504" className="cursor-pointer"   fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M392 54.1C455 99.1 496 172.7 496 256C496 392.8 385.2 503.7 248.5 504C112 504.3 0.200183 393 0.000182516 256.4C-0.0998175 173.1 40.9002 99.3 103.8 54.2C115.5 45.9 131.8 49.4 138.8 61.9L154.6 90C160.5 100.5 157.7 113.8 148 121C106.5 151.8 80.0002 200.6 80.0002 255.9C79.9002 348.2 154.5 424 248 424C339.6 424 416.6 349.8 416 254.9C415.7 203.1 391.3 153.1 347.9 120.9C338.2 113.7 335.5 100.4 341.4 90L357.2 61.9C364.2 49.5 380.4 45.8 392 54.1ZM288 264V24C288 10.7 277.3 0 264 0H232C218.7 0 208 10.7 208 24V264C208 277.3 218.7 288 232 288H264C277.3 288 288 277.3 288 264Z" fill={fill}/>
    </svg>
    
  
  )
  
}
SignInIcon.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  fill: PropTypes.string
}

export default SignInIcon
