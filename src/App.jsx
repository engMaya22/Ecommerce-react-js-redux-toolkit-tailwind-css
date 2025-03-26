import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import { useState } from "react";
import Order from "./pages/Order";




const App = () => {

  const [ order , setOrder] = useState(null);

  const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<MainLayout />}>
                  <Route index element={<Home />}></Route>
                  <Route path="/shop" element={<Shop />}></Route>
                  <Route path="/cart" element={<Cart />}></Route>
                  <Route path="/checkout" element={<Checkout setOrder={setOrder} />} ></Route>
                  <Route path="/order-confirmation" element={<Order order={order} />} ></Route>

                  <Route path="*" element={<NotFound />}></Route>

        </Route>
      )
  );



  return (
    <RouterProvider router={router} />

   
  )
}

export default App

// flex-1 makes item shrink to be by w-full all remain space like in navbar

//to do make add to cart disable if there is item already added , work on notification swall when addTocart, details product
//persist to save data in store 
// use formik for checkout validation and login , register forms
//save data checkout in localstorage
//make more beautiful desgin with animation for titles 
//make order number function dynamic generated number
//use custom hook for logic