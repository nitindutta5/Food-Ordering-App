import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (state.some((item) => item.id === action.payload.id)) {
        let index = state.findIndex((item) => item.id === action.payload.id);
        state[index].qty = state[index].qty + 1;
      } else {
        state.push({ ...action.payload, qty: 1 });
      }
    },
    removeFromCart: (state, action) => {
    let index = state.findIndex((item) => item.id === action.payload.id);
    if(state[index].qty === 1) {
        state.splice(index, 1);
    }
    else{
        state[index].qty = state[index].qty - 1;
    }  

    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
