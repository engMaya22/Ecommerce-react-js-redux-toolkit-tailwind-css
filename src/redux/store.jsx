import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice"
import cartSlice from "./cartSlice"


const store = configureStore({
    reducer:{
        cart: cartSlice,//cart name uses in use selector
        product : productSlice ,// name uses in use selector
    }
})

export default store;