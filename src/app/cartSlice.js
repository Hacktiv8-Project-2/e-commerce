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
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },

    increaseQuantity: (state, action) => {
      state.cartItems
        .filter((item) => item.id === action.payload)
        .map((item) => {
          const currentValue = item.qty;
          if (currentValue === -1) {
            item.qty = 1;
          } else {
            item.qty = currentValue + 1;
          }
          return item;
        });
    },
    decreaseQuantity: (state, action) => {
      state.cartItems
        .filter((item) => item.id === action.payload)
        .map((item) => {
          const currentValue = item.qty;
          if (currentValue === -1) {
            item.qty = 1;
          } else {
            item.qty = currentValue - 1;
          }
          return item;
        });
    },
    setCheckout: (state, action) => {
      state.checkout.push(...action.payload);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  setCheckout,
  decreaseQuantity,
  increaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
