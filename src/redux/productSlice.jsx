import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    products : [],
    featuredProducts : []
}

const productSlice = createSlice({
    name : 'products' ,
    initialState ,
    reducers:{
        setProducts(state , action){
            state.products = action.payload
        },
        setFeaturedProducts(state , action){
            state.featuredProducts = action.payload
        }
      
    }
})
export const {setProducts , setFeaturedProducts} = productSlice.actions;
export default productSlice.reducer