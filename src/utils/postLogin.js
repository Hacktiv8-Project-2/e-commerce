import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const postLogin = createAsyncThunk('auth/postLogin', async (data) => {
  const url = import.meta.env.VITE_BASE_URL + '/auth/login'
  const isAdmin = data.username == import.meta.env.VITE_ADMIN_EMAIL && data.password == import.meta.env.VITE_ADMIN_PASSWORD

  try {
    const response = isAdmin
      ? { data: { token: Date.now() } }
      : await axios.post(url, data)
    return {
      token: response.data.token,
      username: data.username
    }
  } catch (_) {
    throw ('Invalid username or password')
  }
})
