



import React from 'react'
import { useNavigate } from 'react-router-dom'

const Order = ({order}) => {
  const navigte = useNavigate();
  return (
    <div className='container px-4 py-8 mx-auto md:px-16 lg:px-24'>
         <h2 className='mb-4 text-2xl font-semibold'>Thank you for your order</h2>
         <p>Your order has been placed successfully you will recieve an email contains details</p>
         <div className='px-4 py-8 mx-auto mt-6 bg-gray-100 border rounded-lg md:px-8 lg:px-16'>
             <h3 className='mb-2 text-lg font-semibold'>Order Summery</h3>
             <p>Order Number: {order.orderNumber}</p>
             <div className='mt-4'>
                 <h2 className='mb-2 font-semibold text-md'>Shipping Information</h2>
                 <p>Address : {order.shippingInformation.address}</p>
                 <p> City : {order.shippingInformation.city}</p>
                 <p>Zip : {order.shippingInformation.zip}</p>

             </div>
             <div className='mt-4'>
                <h3 className='mb-2 font-semibold text-md'>Item Ordered</h3>
                {
                    order.products.map(product => (
                        <div key={product.id} className='flex justify-between mt-2' >
                           <p> {product.name} x {product.quantity}</p>
                           <p> {product.price * product.quantity}</p>

                        </div>
                    ))
                }
             </div>
             <div  className='flex justify-between mt-2'>
                <span>Total Price : </span>
                <span>{order.totalPrice}</span>
             </div>
             <div className='flex flex-col gap-2 mt-6 md:flex-row'>
                 <buttton className ="px-4 py-2 text-center text-white bg-green-500 hover:bg-green-600">Order Tracking</buttton>
                 <button onClick={()=>navigte('/shop')} className ="px-4 py-2 text-center text-white bg-red-500 hover:bg-red-600">Continue Shopping</button>
             </div>
         </div>
      
    </div>
  )
}

export default Order
