import {
  ADD_NEW_REVIEW, ADD_FIRST_REVIEW, TOGGLE_CREATE_REVIEW_MODAL,
  TOGGLE_CREATE_ACCOUNT_MODAL, TOGGLE_TOKEN_REVEAL_MODAL, USER_DATA,
  REVIEWS, SECTORS, COMPANIES, NEW_COMMENT, LOADING_REVIEWS, LOGGED_IN
} from '@constants'

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

    case USER_DATA:
      return {
        ...state,
        user: state.user
      }
    case REVIEWS: {
      return {
        ...state,
        reviews: [...state.reviews, ...payload]
      }
    }
    case SECTORS: {
      return {
        ...state,
        sectors: state.sectors.concat(payload)
      }
    }

    case COMPANIES: {
      return {
        ...state,
        companies: state.companies.concat(payload)
      }
    }

    case NEW_COMMENT: {
      return {
        ...state,
        newComment: payload
      }
    }

    case LOADING_REVIEWS: {
      return {
        ...state,
        loadingReviews: payload
      }
    }

    case LOGGED_IN: {
      return {
        ...state,
        loggedIn: payload
      }
    }
    // return Object.assign({}, state, {
    //   newReview: state.newReview.concat(payload)
    // })
    default:
      return state
  }
}

export default rootReducer
