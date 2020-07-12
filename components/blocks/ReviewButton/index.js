import React from 'react'
import { toggleCreateReviewModal, toggleCreateAccountModal } from '@actions'
import { useDispatch } from 'react-redux'
import { getUser } from 'utils'

const ReviewButton = () => {
  const dispatch = useDispatch()
  const openReviewModal = (value) => dispatch(toggleCreateReviewModal(value))
  const openAccountModal = value => dispatch(toggleCreateAccountModal(value))

  const buttonClick = () => {
    getUser() ? openReviewModal(true) : openAccountModal(true)
  }

  return <div className="button button--primary" onClick={buttonClick}>REVIEW COMPANY</div>
}

export default ReviewButton
