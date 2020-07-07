import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/index'

const initialState = {
  newReview: [''],
  showCreateAccountModal: false,
  showCreateReviewModal: false,
  showTokenRevealModal: false
}

const store = createStore(rootReducer, initialState)

export default store
