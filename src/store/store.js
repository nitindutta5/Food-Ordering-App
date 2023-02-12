import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slices/cart/cartSlice'

export const store = configureStore({
    reducer:{
        cart: cartReducer
    }
})