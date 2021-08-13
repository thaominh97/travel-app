import { createSlice } from '@reduxjs/toolkit'

const tokenSlice = createSlice({
  name: 'token',
  initialState: { token:'',
email:'' },
  reducers: {
    isToken: (state, {payload}) => {  
      localStorage.setItem("token", payload) 
      state.token = payload
    },
    clearToken : (state) =>{
      localStorage.clear()
      state.token = ''
    }
  },
});

export const {isToken} = tokenSlice.actions

export default tokenSlice.reducer