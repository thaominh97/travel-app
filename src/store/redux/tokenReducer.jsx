import { createSlice } from '@reduxjs/toolkit'

const tokenSlice = createSlice({
  name: 'token',
  initialState: { token:'' },
  reducers: {
    isToken: (state) => {   
      return state.token
    },
  },
});

export const {isToken} = tokenSlice.actions

export default tokenSlice.reducer