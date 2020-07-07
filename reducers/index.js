import { ADD_NEW_REVIEW, ADD_FIRST_REVIEW, TOGGLE_CREATE_REVIEW_MODAL, TOGGLE_CREATE_ACCOUNT_MODAL, TOGGLE_TOKEN_REVEAL_MODAL } from '@constants'

function rootReducer (state, { type, payload }) {
  switch (type) {
    case ADD_FIRST_REVIEW:
      return {
        ...state,
        newReview: [...payload]
      }
    case ADD_NEW_REVIEW:
      return {
        ...state,
        newReview: [...state.newReview, payload]
      }
    case TOGGLE_CREATE_ACCOUNT_MODAL:
      return {
        ...state,
        showCreateAccountModal: !state.showCreateAccountModal
      }
    case TOGGLE_CREATE_REVIEW_MODAL:
      return {
        ...state,
        showCreateReviewModal: !state.showCreateReviewModal
      }
    case TOGGLE_TOKEN_REVEAL_MODAL:
      return {
        ...state,
        showTokenRevealModal: !state.showTokenRevealModal
      }
      // return Object.assign({}, state, {
      //   newReview: state.newReview.concat(payload)
      // })
    default:
      return state
  }
}

export default rootReducer
