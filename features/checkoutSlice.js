import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  shippingInfo: {},
};
const checkoutSlice = createSlice({
  name: "checkout",
  initialState: initialState,
  reducers: {
    addShippingInfo(state, action) {
      state.shippingInfo = action.payload;
    },
    clearInfo(state){
      state.shippingInfo = {}
    }
  },
});

export const { addShippingInfo ,clearInfo} = checkoutSlice.actions;
export const selectShippingInfo = (state) => state.checkout?.shippingInfo;

export default checkoutSlice.reducer;
