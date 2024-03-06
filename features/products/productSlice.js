import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"


const BASE_URL = `https://ecommerse-backend-production.up.railway.app/api`


export const getProducts = createAsyncThunk("products/getProducts", async (Limit) => {
    const response = await axios.get(BASE_URL+`/products?limit=${Limit}`)
    return response?.data;
  });


export const getAllProducts = createAsyncThunk("products/getAllProducts", async ({page,price=[0,2000]}) => {
    // &price[gte]=${price[0]}&price[lte]=${price[1]}
    const response = await axios.get(`${BASE_URL}/products?page=${page}&limit=6&price[gte]=${price[0]}&price[lte]=${price[1]}`)
    return response?.data;
  });

  export const getSearchProducts = createAsyncThunk("products/getSearchProducts", async (searchKeyword="")=>{
    const response = await axios.get(`${BASE_URL}/products?keyword=${searchKeyword}`)
    return response?.data;
  })

export const getProductById = createAsyncThunk("products/getProductById", async(id)=>{
    const response = await axios.get(BASE_URL+`/product/${id}`)
    return response?.data


})


const initialState = {
    products: [],
    allProducts:[],
    product:null,
    totalProducts:0,
    filterProductsCount:0,
    isLoading: false,
    error: { isError: false, errMsg: "" },
}



const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    clearError: (state) => {
        state.error.isError = false;
        state.error.errMsg = "";
      },
    
},
  extraReducers(builder) {
   
        builder
            .addCase(getProducts.pending, (state, action) => {
                
                state.isLoading=true
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.isLoading=false
                state.products = state.products.concat(action.payload.products
                    );
                   
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.isLoading=false
                state.products=[]
                state.error.isError = true;
                state.error.errMsg = action.payload;
            })
            .addCase(getAllProducts.pending, (state, action) => {
                
                state.isLoading=true
            })
            .addCase(getAllProducts.fulfilled, (state, action) => {
                console.log("allProducts",action.payload)
                state.isLoading=false
                state.allProducts = action?.payload?.products  
                state.totalProducts = action?.payload?.productCount 
                state.filterProductsCount = action?.payload?.filterProductsCount 
                // state.allProducts.concat();
               
            })
            .addCase(getAllProducts.rejected, (state, action) => {
                state.isLoading=false
                state.allProducts=[]
                state.totalProducts=0
                state.filterProductsCount=0
                state.error.isError = true;
                state.error.errMsg = action.payload;
            })
            .addCase(getProductById.pending, (state, action) => {
                
                state.isLoading=true
            })
            .addCase(getProductById.fulfilled, (state, action) => {
               
                state.isLoading=false
               state.product = action.payload.product;
            
                    
            })
            .addCase(getProductById.rejected, (state, action) => {
                state.isLoading=false
                state.product=null
                state.error.isError = true;
                state.error.errMsg = action.payload;
            })
            .addCase(getSearchProducts.pending, (state, action) => {
                
                state.isLoading=true
            })
            .addCase(getSearchProducts.fulfilled, (state, action) => {
                
                state.isLoading=false
                state.allProducts = action.payload.products;
                
                    
            })
            .addCase(getSearchProducts.rejected, (state, action) => {
                state.isLoading=false
                state.allProducts=[]
                state.totalProducts=0
                state.error.isError = true;
                state.error.errMsg = action.payload;
            })
          
    }
})


export const selectFeatureProducts = (state) => state.products.products
export const selectAllProducts = (state) => state.products.allProducts
export const selectProduct = (state) => state.products.product
export const productCount = (state) => state.products.totalProducts
export const selectLoading = (state) => state.products.isLoading
export const getFilterProductsCount = (state) => state.products.filterProductsCount


export const { clearError } = productSlice.actions;
export default productSlice.reducer;