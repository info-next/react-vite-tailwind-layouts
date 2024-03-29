// app/store.js
import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../Features/Auth/authSlice'

const store = configureStore({
  reducer: {
    auth: authReducer
  }
})
export default store