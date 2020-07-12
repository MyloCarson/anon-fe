import { ADD_NEW_REVIEW, ADD_FIRST_REVIEW, TOGGLE_CREATE_REVIEW_MODAL,
  TOGGLE_CREATE_ACCOUNT_MODAL, TOGGLE_TOKEN_REVEAL_MODAL, USER_DATA,
  REVIEWS, SECTORS, COMPANIES, NEW_COMMENT, LOADING_REVIEWS, LOGGED_IN } from '@constants'

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

export function userData (payload) {
  return { type: USER_DATA, payload }
}

export function addReviews (payload) {
  return { type: REVIEWS, payload }
}

export function addSectors (payload) {
  return { type: SECTORS, payload }
}

export function addCompanies (payload) {
  return { type: COMPANIES, payload }
}

export function addNewComment (payload) {
  return { type: NEW_COMMENT, payload }
}

export function toggleLoadingReviews (payload) {
  return { type: LOADING_REVIEWS, payload }
}

export function toggleLoggedIn (payload) {
  return { type: LOGGED_IN, payload }
}
