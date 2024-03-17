import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  shippingInfo:null,
};
const checkoutSlice = createSlice({
  name: "checkout",
  initialState: initialState,
  reducers: {
    addShippingInfo(state, action) {
     
      state.shippingInfo = action.payload;
      console.log("Checkout" ,state.shippingInfo )
    },
    clearInfo(state){
      state.shippingInfo = null
    }
  },
});

export const { addShippingInfo ,clearInfo} = checkoutSlice.actions;
export const selectShippingInfo = (state) => state.checkout?.shippingInfo;

export default checkoutSlice.reducer;
