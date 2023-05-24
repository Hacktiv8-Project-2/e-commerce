import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getData = createAsyncThunk('product/getData', async (endpoint) => {
  const url = import.meta.env.VITE_BASE_URL + endpoint
  try {
    const response = await axios.get(url)
    return response.data
  } catch (error) {
    console.error(error)
  }
})
