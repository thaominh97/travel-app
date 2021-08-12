import { configureStore } from '@reduxjs/toolkit'
import modalReducer from './redux/modalReducer'
import tokenReducer from './redux/tokenReducer'

export default configureStore({
  reducer: {
      modal: modalReducer,
      token: tokenReducer
  },
})