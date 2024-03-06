import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = `https://ecommerse-backend-production.up.railway.app/api`;


export const createUser = createAsyncThunk(
  "userDetails/createUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/register`, data,{withCredentials:true} );
      return response?.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  "userDetails/loginUser",
  async (data, { rejectWithValue }) => {
    try {
      
      const response = await axios.post(`${BASE_URL}/login`,data ,{withCredentials:true});
      return response?.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const updateUser = createAsyncThunk(
  "userDetails/updateUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${BASE_URL}/user/update`,data,{withCredentials:true});
      //{withCredentials:true,} we need to add this for accessing the feature for protected route
      return response?.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "userDetails/logoutUser",
  async () => {
    try {
      const response = await axios.post(`${BASE_URL}/logout`,{},{withCredentials:true});
      return response?.data;
    } catch (err) {
      // return rejectWithValue(err.response.data);
      console.log(err)
    }
  }
);
const initialState = {
  user: null,
  isLoading: false,
  authToken: null,
  error: { isError: false, errMsg: "" },
};

const userSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error.isError = false;
      state.error.errMsg = "";
    },
    // logOut:(state,action)=>{
    //   state.user = null
    //   state.authToken = null
     
    //  }
  },

  extraReducers(builder) {
    builder
      .addCase(createUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
      
        state.isLoading = false;
        state.user = action?.payload?.user;
        state.authToken = action?.payload?.token;
      
       
        
      })
      .addCase(createUser.rejected, (state, action) => {
      
        state.isLoading = false;
        state.user = null;
        state.error.isError = true;
        state.error.errMsg = action.payload.message;
      })
      .addCase(loginUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        
        state.isLoading = false;
        state.user = action?.payload?.user;
        state.authToken = action?.payload?.token;
       
       
     
      })
      .addCase(loginUser.rejected, (state, action) => {
        console.log("actionpayload err", action);
        state.isLoading = false;
        state.user = null;
        state.error.isError = true;
        state.error.errMsg = action.payload.message;
      })
      .addCase(updateUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
     
        state.isLoading = false;
        state.user = action?.payload?.user;
        
      
     
      }).addCase(updateUser.rejected, (state, action) => {
       
        state.isLoading = false;
        state.user = null;
        state.error.isError = true;
        state.error.errMsg = action.payload.message;
      })
      .addCase(logoutUser.pending, (state, action) => {
        state.isLoading = true;
   
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        
        state.isLoading = false;
        state.user = null;
        state.authToken = null;
        // Cookies.remove('token');
     
      })
      .addCase(logoutUser.rejected, (state, action) => {
      
        state.isLoading = false;
        state.user = null;
        state.error.isError = true;
        // state.authToken = null;
        
        state.error.errMsg = action?.payload?.message;
      });
  },
});

export const selectUser = (state) => state.userDetails?.authToken;
export const selectUserData = (state) => state.userDetails?.user;
export const selectLoading = (state) => state.userDetails.isLoading;
export const selectError = (state) => state.userDetails.error;


export const { clearError } = userSlice.actions;
export default userSlice.reducer;
