import { createSlice } from "@reduxjs/toolkit";
import { getData } from "../utils/getData";

const initialState = {
  products: [],
};

const product = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getData.fulfilled, (state, action) => {
        state.products = action.payload;
        state.products.map((product) => {
          product.quantity = 20;
        });
      })
      .addCase(getData.rejected, (action) => {
        console.log("get data rejected");
        console.log(action.payload);
      });
  },
});

export default product.reducer;
