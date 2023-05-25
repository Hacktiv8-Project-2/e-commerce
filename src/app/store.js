import { configureStore } from '@reduxjs/toolkit'
import productReducer from './productSlice'
import cartReducer from './cartSlice'
import authSlice from './authSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice,
    product: productReducer,
    cart: cartReducer,
  },
})
