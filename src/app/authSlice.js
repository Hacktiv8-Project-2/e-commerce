import { createSlice } from '@reduxjs/toolkit'
import { postLogin } from '../utils/postLogin'

const initialState = {
  isLoginPending: false,
  isLoginSuccess: false,
  errorMessage: '',
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(postLogin.pending, (state) => {
        state.isLoginPending = true
      })
      .addCase(postLogin.fulfilled, (state, action) => {
        const { username, token } = action.payload
        state.isLoginPending = false
        state.isLoginSuccess = true
        localStorage.setItem('AUTH_TOKEN', token)
        localStorage.setItem('AUTH_USERNAME', username)
        location.assign('/')
      })
      .addCase(postLogin.rejected, (state, action) => {
        state.isLoginPending = false
        state.isLoginSuccess = false
        state.errorMessage = action.error.message
      })
  }
})

export default authSlice.reducer