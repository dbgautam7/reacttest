import { createSlice } from "@reduxjs/toolkit";

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
});


export const {setProduct} = productSlice.actions;
export default productSlice.reducer;