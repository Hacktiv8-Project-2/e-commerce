import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getData = createAsyncThunk('product/getData', async () => {
  const url = import.meta.env.VITE_BASE_URL + '/products'
  try {
    const response = await axios.get(url)
    return response.data
  } catch (error) {
    console.error(error)
  }
})
