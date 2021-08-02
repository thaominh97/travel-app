import { createSlice } from '@reduxjs/toolkit'

const modalSlice = createSlice({
  name: 'modal',
  initialState: false,
  reducers: {
    openModal: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      return true
    },
    hideModal: (state) => {
       return false
    }
  },
})

// Action creators are generated for each case reducer function
export const { openModal, hideModal } = modalSlice.actions

export default modalSlice.reducer