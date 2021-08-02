import { configureStore } from '@reduxjs/toolkit'
import modalReducer from './redux/modalReducer'

export default configureStore({
  reducer: {
      modal: modalReducer
  },
})