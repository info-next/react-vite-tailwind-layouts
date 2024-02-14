// features/auth/authSlice.js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userInfo: null, 
  userToken: null, 
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login : (state, action) =>{
        state.userInfo = action.payload;
        userToken = "tokennnnnnnnnn";
    },
    logout :(state)=> {
        state.userInfo = null;
        state.userToken = null
    }
  },
})

export const {login,logout} = authSlice.actions;
export default authSlice.reducer;