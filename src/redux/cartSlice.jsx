import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    products : [],//array of objects its like a cart
    totalQuantity : 0,
    totalPrice : 0
}
const cartSlice = createSlice ({
    name:'cart',
    initialState ,
    reducers :{
        addTocart(state , action){
            
             const newItem = action.payload;
             const itemInCart = state.products.find(el => el.id === newItem.id);//isAlreadyExsist in state.products 
             if(itemInCart){
                itemInCart.quantity ++;
                itemInCart.totalPrice += itemInCart.price;

             }else{
                state.products.push({
                    id : newItem.id,
                    name: newItem.name,
                    quantity : 1 ,
                    price : newItem.price ,
                    totalPrice: newItem.price,//for first time , later we add this
                    image : newItem.image

                });
             }
             state.totalQuantity  ++ ;
             state.totalPrice += newItem.price;
             

            //  
           

        }

    }


})
export const  {addTocart} = cartSlice.actions
export default cartSlice.reducer