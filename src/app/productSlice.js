import { createSlice } from '@reduxjs/toolkit'
import { getData } from '../utils/getData'

const initialState = {
  products: [],
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    onHandleUpdateStock: (state, action) => {
      state.products.map((product) => {
        if (product.id == action.payload.id) {
          product.quantity = action.payload.quantity
        }
      })
    },
    onHandleCheckoutStock: (state, action) => {
      state.products.map((product) => {
        if (product.id == action.payload.id) {
          product.quantity -= action.payload.quantity
        }
      })
    }
  },
  extraReducers(builder) {
    builder
      .addCase(getData.fulfilled, (state, action) => {
        state.products = action.payload
        state.products.map((product) => {
          product.quantity = 20
        })
      })
      .addCase(getData.rejected, (state, action) => {
        console.log('get data rejected')
        console.log(action.payload);
      })
  }
})

export const { onHandleUpdateStock, onHandleCheckoutStock } = productSlice.actions
export default productSlice.reducer