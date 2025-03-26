import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    products : [],
    featuredProducts : [],
    searchTerm: '',
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
        },
        setSearchTerm(state , action){
            state.searchTerm = action.payload 

        }
       
      
    }
})
export const {setProducts , setFeaturedProducts ,setSearchTerm } = productSlice.actions;
export default productSlice.reducer