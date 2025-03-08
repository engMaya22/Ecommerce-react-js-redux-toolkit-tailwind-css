import { useDispatch, useSelector } from "react-redux";
import EmptyCart from "../assets/images/emptycart.png"
import { FaTrashAlt } from "react-icons/fa";
import { useState } from "react";
import Modal from "../components/Modal";
import ChangeAddress from "../components/ChangeAddress";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../redux/cartSlice";

const Cart = ( )=>{
    const {totalQuantity , products , totalPrice} =  useSelector(state => state.cart);
    const [address , setAddress] = useState('Main street');
    const [isModalOpen , setIsModalOpen] = useState(false);

    const dispatch = useDispatch();
    
    return <div className="container px-4 py-8 mx-auto min-h-96 md:px-16 lg:px-24">
         
              {totalQuantity ? <div>
                                   <h3 className="mb-4 text-2xl font-semibold ">Shopping Cart</h3>
                                    <div className="flex flex-col justify-between mt-8 space-x-10 md:flex-row">
                                      <div className="md:w-2/3"> 
                                        <div className="flex items-center justify-between mb-4 text-xs font-bold border-b">
                                            <p>Products</p>
                                            <div className="flex space-x-8">
                                                <p className="sm:mr-[-20px] md:mr-[40px]">Price</p>
                                                <p>Quantity</p>  
                                                <p>Subtototal</p>  
                                                <p>Remove</p>
                                            </div>
                                        </div>
                                        <div>
                                            {products.map((product)=>(
                                                <div key={product.id}
                                                    className="flex items-center justify-between p-3 border-b">
                                                     <div className="items-center space-x-4 md:flex">
                                                        <img src={product.image} className="object-contain w-16 h-16 rounded"/>
                                                        <div className="flex-1 ml-4">
                                                             <h3 className="text-lg font-semibold">{product.name}</h3>
                                                        </div>
                                                     </div>
                                                     <div className="flex items-center space-x-12">
                                                        <p>${product.price}</p>
                                                        <div className="flex">
                                                             <button className="text-xl font-bold border-r px-1.5" onClick={()=>dispatch(decreaseQuantity(product.id))}>-</button>
                                                              <p className="px-2 text-xl">{product.quantity}</p>
                                                              <button className="px-1 text-xl border-l" onClick={()=>dispatch(increaseQuantity(product.id))}>+</button>
                                                        </div>
                                                        <p>
                                                            ${(product.quantity * product.price).toFixed(2)}
                                                        </p>
                                                        <button className="text-red-500 hover:text-red-700" onClick={()=>dispatch(removeFromCart(product.id))}>
                                                           <FaTrashAlt />
                                                        </button>
                                                     </div>
                                                </div>
                                            ))}
                                        </div>
                                        
                                      </div>

                                       <div className="p-6 bg-white border rounded-lg shadow-md md:1/3">
                                            <h3 className="mb-5 text-sm font-semibold">Cart Total</h3>
                                            <div className="flex justify-between pb-1 mb-5 border-b">
                                                 <span className="text-sm">Total Items:</span>
                                                 <span>{totalQuantity}</span>
                                            </div>
                                            <div className="pb-2 mb-4 border-b">
                                                 <p>Shipping:</p>
                                                 <p className="ml-2">Shipping to:{" "}
                                                 <span className="text-xs font-bold">{address}</span>
                                                 </p>
                                                
                                                 <button className="mt-1 ml-2 text-blue-500 hover:underline" onClick={()=>setIsModalOpen(true)}>Change address</button>
                                            </div>
                                            <div>
                                                <span>Total Price :</span>
                                                <span>{totalPrice.toFixed(2)}</span>
                                            </div>
                                            <button className="w-full py-2 text-white bg-red-600 rounded-md hover:bg-red-800"
                                            >Procced to checkout</button>
                                        </div>
                                    
                                    </div>
                                    <Modal isModalOpen={isModalOpen}  setIsModalOpen={setIsModalOpen}>
                                        <ChangeAddress setAddress={setAddress} setIsModalOpen={setIsModalOpen}/>
                                    </Modal>
                    
                               </div>
                             :
                                <div className="flex justify-center">
                                    <img src={EmptyCart} className="h-90" />
                                </div>

              }
        

           </div>
}

export default Cart;