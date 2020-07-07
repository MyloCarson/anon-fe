import { ADD_NEW_REVIEW, ADD_FIRST_REVIEW, TOGGLE_CREATE_REVIEW_MODAL, TOGGLE_CREATE_ACCOUNT_MODAL, TOGGLE_TOKEN_REVEAL_MODAL } from '@constants'

export function addNewReview (payload) {
  return { type: ADD_NEW_REVIEW, payload }
}

export function addFirstReview (payload) {
  return { type: ADD_FIRST_REVIEW, payload }
}

export function toggleCreateAccountModal (payload) {
  return { type: TOGGLE_CREATE_ACCOUNT_MODAL, payload }
}

export function toggleCreateReviewModal (payload) {
  return { type: TOGGLE_CREATE_REVIEW_MODAL, payload }
}

export function toggleTokenRevealModal (payload) {
  return { type: TOGGLE_TOKEN_REVEAL_MODAL, payload }
}
