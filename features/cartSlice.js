import { createSlice } from "@reduxjs/toolkit";

const createCart = () => {
  let value;
  if (typeof window !== "undefined") {
    value = localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [];
  }
  return value;
};


const initialState = {
  cartItems: createCart(),
  cartTotalQuantity: 0,
  cartTotalPrice: 0,
 
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      
      const item = state.cartItems.find((item) => item.id === action.payload.id);
    // state.cartItems.findIndex((item)=>item.id===action.payload.id)
      if (item) {
        let updatedCartItems = state.cartItems.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: (Number(item?.quantity) || 0) + 1,
            };
          }
       
          return item;
        });
        console.log("debug2",updatedCartItems)
        state.cartItems = updatedCartItems;
      } else {
        const tempProduct = { ...action.payload, quantity: 1 };
        state.cartItems.push(tempProduct);
      }

      if (typeof window !== "undefined") {
        localStorage?.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },
    removeFromCart(state, action) {
      const nextItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
        // dont use {}  bracket in above line
      );

      state.cartItems = nextItems;
      if (typeof window !== "undefined") {
        localStorage?.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (state.cartItems[itemIndex].quantity > 1) {
        state.cartItems[itemIndex].quantity -= 1;
      } else if (state.cartItems[itemIndex].quantity === 1) {
        const nextItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
          // dont use {}  bracket in above line
        );

        state.cartItems = nextItems;
      }

      if (typeof window !== "undefined") {
        localStorage?.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },
    clearCart(state, action) {
      state.cartItems = [];
      if (typeof window !== "undefined") {
        localStorage?.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },
    getTotals(state, action) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { quantity } = cartItem;
          const price = cartItem?.price || 0;
          const itemTotal = quantity * price; //for one product
          // console.log(itemTotal, "in quantity total")
          cartTotal.total += itemTotal;
          cartTotal.quantity += quantity;
          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.cartTotalQuantity = quantity;
      state.cartTotalPrice = total;
    },
  },
});

export const { addToCart, removeFromCart, decreaseCart, clearCart, getTotals } =
  cartSlice.actions;
  export const selectCartData = (state) => state.cart?.cartItems;
export const TotalPrice = (state) => state.cart?.cartTotalPrice;
export const TotalQuantity = (state) => state.cart?.cartTotalQuantity
export default cartSlice.reducer;
