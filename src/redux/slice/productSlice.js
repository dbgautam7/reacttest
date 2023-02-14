import { createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from 'react-redux';

 const initialState = {
 products:[],
 isLoading: false,
    error: ''
};



const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct: (state, actions) => {
        state.products = actions.payload
      }
    }
//   extraReducers: {
//     [fetchProducts.fulfilled]: (state, action) => {
//       state.isLoading = false;
//       state.items = action.payload;
//     },
//     [fetchProducts.pending]: (state) => {
//       state.isLoading = true;
//       state.error = "";
//     },
//     [fetchProducts.rejected]: (state, action) => {
//       state.isLoading = false;
//       state.error = action.error.message;
//     },
//   },
});


export const {setProduct} = productSlice.actions;
export default productSlice.reducer;