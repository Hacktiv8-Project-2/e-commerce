import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const qty = action.payload.qty;

      const index = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index >= 0) {
        state.cartItems[index].qty += qty || 1;
      } else {
        state.cartItems.push({ ...action.payload, qty: qty || 1 });
      }
    },
  },
});

export const {
  addToCart,
  removeItem,
  incrementItem,
  decrementItem,
  clearCart,
  setCheckout,
} = cartSlice.actions;

export default cartSlice.reducer;
