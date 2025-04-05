import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Checkout = ({setOrder})=>{
    const navigate = useNavigate();
    const [billingToggle , setBillingToggle] = useState(true);
    const [shippingToggle , setShippingToggle] = useState(false);
    const [paymentToggle , setPaymentToggle] = useState(false);

    const cart = useSelector(state => state.cart);
   

    const handleOrder = (values)=>{
        const newOrder = {
            shippingInformation: {
                address: values.address,
                city: values.city,
                zip: values.zip
            },
            paymentMethod: values.paymentMethod,
            products: cart.products,
            orderNumber: `ORD-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
            totalPrice: cart.totalPrice
            };
            setOrder(newOrder);
            navigate("/order-confirmation");
        
    }
    const initialValues = {
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        zip: '',
        paymentMethod: 'cod',
      };
      
      const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        phone: Yup.string().required('Phone number is required'),
        address: Yup.string().required('Address is required'),
        city: Yup.string().required('City is required'),
        zip: Yup.string().required('ZIP code is required'),
      });
      
    
   return <div className="container px-4 py-8 mx-auto min-h-96 md:px-16 lg:px-24">
            
                                       <h3 className="mb-4 text-2xl font-semibold ">Checkout</h3>
                                       <div className="flex flex-col justify-between mt-8 space-x-10 md:flex-row">
                                            <div className="md:w-2/3"> 
                                            <Formik
                                                initialValues={initialValues}
                                                validationSchema={validationSchema}
                                                onSubmit={handleOrder}
                                               >
                                                {({ values }) => (

                                                    <Form>
                                                    {/* Billing Info */}
                                                    <div className="p-2 mb-6 border">
                                                        <div
                                                        className="flex items-center justify-between"
                                                        onClick={() => setBillingToggle(!billingToggle)}
                                                        >
                                                        <h3 className="mb-2 text-lg font-semibold">Billing Information</h3>
                                                        {billingToggle ? <FaAngleDown /> : <FaAngleUp />}
                                                        </div>
                                                        <div className={`space-y-4 ${billingToggle ? "" : "hidden"}`}>
                                                        <div>
                                                            <label htmlFor="name" className="block text-gray-700">Name</label>
                                                            <Field name="name" className="w-full px-3 py-2 border" />
                                                            <ErrorMessage name="name" component="div" className="text-sm text-red-600" />
                                                        </div>

                                                        <div>
                                                            <label htmlFor="email" className="block text-gray-700">Email</label>
                                                            <Field name="email" type="email" className="w-full px-3 py-2 border" />
                                                            <ErrorMessage name="email" component="div" className="text-sm text-red-600" />
                                                        </div>

                                                        <div>
                                                            <label htmlFor="phone" className="block text-gray-700">Phone</label>
                                                            <Field name="phone" className="w-full px-3 py-2 border" />
                                                            <ErrorMessage name="phone" component="div" className="text-sm text-red-600" />
                                                        </div>
                                                        </div>
                                                    </div>

                                                    {/* Shipping Info */}
                                                    <div className="p-2 mb-6 border">
                                                        <div
                                                        className="flex items-center justify-between"
                                                        onClick={() => setShippingToggle(!shippingToggle)}
                                                        >
                                                        <h3 className="mb-2 text-lg font-semibold">Shipping Information</h3>
                                                        {shippingToggle ? <FaAngleDown /> : <FaAngleUp />}
                                                        </div>
                                                        <div className={`space-y-4 ${shippingToggle ? "" : "hidden"}`}>
                                                        <div>
                                                            <label htmlFor="address" className="block text-gray-700">Address</label>
                                                            <Field name="address" className="w-full px-3 py-2 border" />
                                                            <ErrorMessage name="address" component="div" className="text-sm text-red-600" />
                                                        </div>

                                                        <div>
                                                            <label htmlFor="city" className="block text-gray-700">City</label>
                                                            <Field name="city" className="w-full px-3 py-2 border" />
                                                            <ErrorMessage name="city" component="div" className="text-sm text-red-600" />
                                                        </div>

                                                        <div>
                                                            <label htmlFor="zip" className="block text-gray-700">Zip Code</label>
                                                            <Field name="zip" className="w-full px-3 py-2 border" />
                                                            <ErrorMessage name="zip" component="div" className="text-sm text-red-600" />
                                                        </div>
                                                        </div>
                                                    </div>

                                                    {/* Payment Method */}
                                                    <div className="p-2 mb-6 border">
                                                        <div
                                                        className="flex items-center justify-between"
                                                        onClick={() => setPaymentToggle(!paymentToggle)}
                                                        >
                                                        <h3 className="mb-2 text-lg font-semibold">Payment Method</h3>
                                                        {paymentToggle ? <FaAngleDown /> : <FaAngleUp />}
                                                        </div>
                                                        <div className={`space-y-4 ${paymentToggle ? "" : "hidden"}`}>
                                                        <div className="flex items-center mb-2">
                                                            <Field type="radio" name="paymentMethod" value="cod" />
                                                            <label className="block ml-2 text-gray-700">Cash on Delivery</label>
                                                        </div>
                                                        <div className="flex items-center mb-2">
                                                            <Field type="radio" name="paymentMethod" value="dc" />
                                                            <label className="block ml-2 text-gray-700">Debit Card</label>
                                                        </div>

                                                        {values.paymentMethod === 'dc' && (
                                                            <div className="p-4 mb-4 bg-gray-100 rounded-lg">
                                                            {/* You can add more Formik Fields here for debit card inputs */}
                                                            <div className="mb-4">
                                                                <label className="block mb-2 font-semibold text-gray-700">Card Number</label>
                                                                <input type="text" className="w-full p-2 border rounded" required />
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

                                                    <button
                                                        type="submit"
                                                        className="w-full py-2 mt-6 text-white bg-red-600 hover:bg-red-800"
                                                    >
                                                        Place Order
                                                    </button>
                                                    </Form>
                                                )}
                                                
                                           </Formik>
                                            
                                                

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
                                       
                                              
                                            
                                            
                                            </div>
                                                   
                                                 
                                        </div>
                                       
                 
           
   
            </div>
}
export default Checkout;