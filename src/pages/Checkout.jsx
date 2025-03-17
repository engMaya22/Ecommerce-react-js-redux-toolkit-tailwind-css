import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useSelector } from "react-redux";



const Checkout = ()=>{
    const [billingToggle , setBillingToggle] = useState(true);
    const [shippingToggle , setShippingToggle] = useState(false);
    const [paymentToggle , setPaymentToggle] = useState(false);
    const [paymentMethod , setPaymentMethod] = useState('cod');

    const cart = useSelector(state => state.cart);
    const [ shippingInfo , setShippingInfo] = useState({
        address: '' , 
        city : '',
        zip: ''

    });

    
   return <div className="container px-4 py-8 mx-auto min-h-96 md:px-16 lg:px-24">
            
                                       <h3 className="mb-4 text-2xl font-semibold ">Checkout</h3>
                                       <div className="flex flex-col justify-between mt-8 space-x-10 md:flex-row">
                                            <div className="md:w-2/3"> 
                                            
                                               {/* billing info */}
                                               <div className="p-2 mb-6 border">
                                                
                                                   <div className="flex items-center justify-between "
                                                       onClick={()=>setBillingToggle(!billingToggle)}> 
                                                        <h3 className="mb-2 text-lg font-semibold">Billing Information</h3>
                                                        { billingToggle ?  <FaAngleDown /> : <FaAngleUp />}
                                                   </div>
                                                   <div className={`space-y-4 ${billingToggle ? "" : "hidden"}`} >
                                                       <div>
                                                           <label htmlFor="name" className="block text-gray-700 ">Name </label>
                                                           <input type="text" name="name" placeholder="Enter Name" className="w-full px-3 py-2 border"/>
                                                       </div>
                                                   
                                                       <div>
                                                           <label htmlFor="email" className="block text-gray-700">Email </label>
                                                           <input type="email" name="email" placeholder="Enter Email" className="w-full px-3 py-2 border"/>
                                                       </div>
                                                  
                                                       <div>
                                                           <label htmlFor="phone" className="block text-gray-700">Phone </label>
                                                           <input type="tel" name="phone" className="w-full px-3 py-2 border"/>
                                                       </div>
                                                   </div>
                                                   
                                
                                               </div>
                                               
                                               {/* shipping info */}
                                               <div className="p-2 mb-6 border">
                                                
                                                    <div className="flex items-center justify-between "
                                                        onClick={()=>setShippingToggle(!shippingToggle)}> 
                                                        <h3 className="mb-2 text-lg font-semibold">Shipping Information</h3>
                                                        { shippingToggle ?  <FaAngleDown /> : <FaAngleUp />}
                                                    </div>
                                                    <div className={`space-y-4 ${shippingToggle ? "" : "hidden"}`} >
                                                        <div>
                                                            <label htmlFor="address" className="block text-gray-700">Address </label>
                                                            <input type="text" name="phone" className="w-full px-3 py-2 border" 
                                                             onChange={(e)=>setShippingInfo({...shippingInfo , address :  e.target.value})}/>
                                                        </div>
                                                        <div>
                                                            <label htmlFor="city" className="block text-gray-700 ">City </label>
                                                            <input type="text" name="city" id="city"  placeholder="Enter City" className="w-full px-3 py-2 border"
                                                            onChange={(e)=>setShippingInfo({...shippingInfo , city :  e.target.value})}
                                                            />
                                                        </div>
                                                    
                                                        <div>
                                                            <label htmlFor="zip" className="block text-gray-700">Zip code </label>
                                                            <input type="text" name="zip" placeholder="Enter Email" className="w-full px-3 py-2 border"
                                                            onChange={(e)=>setShippingInfo({...shippingInfo , zip:e.target.value})} />
                                                        </div>
                                                
                                                        
                                                    </div>
                             
                                               </div>

                                                 {/* payument  method */}
                                                <div className="p-2 mb-6 border">
                                                
                                                    <div className="flex items-center justify-between "
                                                        onClick={()=>setPaymentToggle(!paymentToggle)}> 
                                                        <h3 className="mb-2 text-lg font-semibold">Payment Method</h3>
                                                        { paymentToggle ?  <FaAngleDown /> : <FaAngleUp />}
                                                    </div>
                                                    <div className={`space-y-4 ${paymentToggle ? "" : "hidden"}`} >
                                                        <div className="flex items-center mb-2">
                                                            <input type="radio" name="payment" 
                                                                   checked={paymentMethod === 'cod'}
                                                                   onChange={()=>setPaymentMethod('cod')}  />
                                                            <label htmlFor="" className="block ml-2 text-gray-700 ">Cash on Delivery </label>

                                                        </div>
                                                        <div className="flex items-center mb-2"> 
                                                            <input type="radio" name="payment" 
                                                                   checked={paymentMethod === 'dc'}
                                                                   onChange={()=>setPaymentMethod('dc')}  />
                                                            <label htmlFor="" className="block ml-2 text-gray-700"> Debit Card </label>

                                                        </div>

                                                        {paymentMethod === 'dc' && (
                                                            <div className="p-4 mb-4 bg-gray-100 rounded-lg">
                                                                 <h3>Debit Card Information</h3>
                                                                 <div className="mb-4">
                                                                    <label className="block mb-2 font-semibold text-gray-700">Card Number</label>
                                                                     <input type="text" required placeholder="Enter card number" className="w-full p-2 border rounded"/>
                                                                 </div>
                                                                 <div className="mb-4">
                                                                    <label className="block mb-2 font-semibold text-gray-700">Card Holder Name</label>
                                                                     <input type="text" required placeholder="Enter card holder name"  className="w-full p-2 border rounded"/>
                                                                 </div>
                                                                 <div className="mb-4">
                                                                    <label className="block mb-2 font-semibold text-gray-700">Expire Date</label>
                                                                     <input type="date" required placeholder="Enter expire date"  className="w-full p-2 border rounded" />
                                                                 </div>
                                                                 <div className="w-1/2 ml-2">
                                                                    <label className="block mb-2 font-semibold text-gray-700">CVV</label>
                                                                     <input type="text" placeholder="Enter cvv" required  className="w-full p-2 border rounded"/>
                                                                 </div>
                                                            </div>
                                                        )}
                                                    
                                                       
                                                    </div>
                                                </div>

                                            </div>
                                                
                             
                                    
                                            <div className="p-6 bg-white border rounded-lg shadow-md md:w-1/3">
                                              <h3 className="mb-4 text-lg font-semibold">Order Summary</h3>
                                              <div className="space-y-4">
                                                {cart.products.map(product => (
                                                    <div key={product.id} className="flex justify-between"> 
                                                         <div className="flex items-center">
                                                             <img  src={product.image } alt={product.title} className="object-contain w-16 h-16 rounded"/>
                                                             <div className="ml-2">
                                                                 <h4 className="font-semibold text-md">{product.name}</h4>
                                                                  <p className="text-gray-600">${product.price } x {product.quantity}</p>
                                                             </div>
                                                         </div>
                                                    </div>
                                                ))}
                                              </div>
                                              <div className="pt-4 mt-4 border-t">
                                                <div className="flex justify-between">
                                                  <span>Total Price</span>
                                                  <span className="font-semibold">${cart.totalPrice.toFixed(2)}</span>
                                                </div>
                                            
                                              </div>
                                              <button className="w-full py-2 mt-6 text-white bg-red-600 hover:bg-red-800">Place Order</button>
                                              
                                            
                                            
                                            </div>
                                                   
                                                 
                                        </div>
                                       
                 
           
   
            </div>
}
export default Checkout;