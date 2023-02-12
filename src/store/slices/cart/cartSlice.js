import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart: (state, action) => {
            state.push(action.payload)
        }
    }
})

export const {addToCart} = cartSlice.actions

export default cartSlice.reducer