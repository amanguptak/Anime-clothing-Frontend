

import { configureStore } from '@reduxjs/toolkit'
import storage from "redux-persist/lib/storage"
import {persistReducer} from "redux-persist"
import {combineReducers} from "@reduxjs/toolkit"
import productReducer from "./products/productSlice"
import userReducer from "./userSlice"
import cartReducer from "./cartSlice"
import checkoutReducer from "./checkoutSlice"
import { createWrapper } from "next-redux-wrapper";

const reducer = combineReducers({
  userDetails: userReducer,
  products:productReducer,
  cart:cartReducer,
  checkout:checkoutReducer
 
})

const persistConfig = {
  key :"root",
  version:1,
  storage,
  blacklist:["products",'cart']
}
const persistedReducer = persistReducer(persistConfig,reducer)

export const store = configureStore({
  reducer: persistedReducer
   
  
})

export default store
// export const wrapper = createWrapper(store);
// import { configureStore } from '@reduxjs/toolkit'

// import productReducer from "./products/productSlice"
// import userReducer from "./userSlice"

// export const store = configureStore({
//   reducer: {
//     userDetails: userReducer,
//     products:productReducer,
//   },
// })

// export default store


