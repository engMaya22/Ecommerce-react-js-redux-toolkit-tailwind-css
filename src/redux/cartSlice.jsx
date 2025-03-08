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
           

        },
        removeFromCart(state , action){
            const id = action.payload;
            const itemInCart = state.products.find(item => item.id === id);
            if(itemInCart){
                state.totalPrice -= itemInCart.totalPrice;
                state.totalQuantity  -= itemInCart.quantity;
                state.products = state.products.filter(item => item.id != id);
            }
        },
        increaseQuantity(state , action){
            const id = action.payload;
            const itemInCart = state.products.find(item => item.id === id);
            if(itemInCart){
                itemInCart.quantity ++ ;
                itemInCart.totalPrice += itemInCart.price;
                state.totalQuantity  ++;
                state.totalPrice += itemInCart.price;
            }
        },
        decreaseQuantity(state , action){
            const id = action.payload;
            const itemInCart = state.products.find(item => item.id === id);
            if(itemInCart && itemInCart.quantity >1){
                itemInCart.quantity -- ;
                itemInCart.totalPrice -= itemInCart.price;
                state.totalQuantity  --;
                state.totalPrice -= itemInCart.price;
            }
        }

    }


})
export const  {addTocart , removeFromCart , increaseQuantity , decreaseQuantity} = cartSlice.actions
export default cartSlice.reducer 