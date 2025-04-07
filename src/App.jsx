import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import { useState } from "react";
import Order from "./pages/Order";
import Details from "./pages/Details";
import { AuthProvider } from "./context/AuthContext";




const App = () => {

  const [ order , setOrder] = useState(null);

  const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<MainLayout />}>
                  <Route index element={<Home />}></Route>
                  <Route path="/shop" element={<Shop />}></Route>
                  <Route path="/product/:id" element={<Details />}></Route>

                  <Route path="/cart" element={<Cart />}></Route>
                  <Route path="/checkout" element={<Checkout setOrder={setOrder} />} ></Route>
                  <Route path="/order-confirmation" element={<Order order={order} />} ></Route>

                  <Route path="*" element={<NotFound />}></Route>

        </Route>
      )
  );



  return (
    <AuthProvider> <RouterProvider router={router} /></AuthProvider> 

   
  )
}

export default App

// flex-1 makes item shrink to be by w-full all remain space like in navbar
// pass setIsModalOpen to children using React.cloneElement




//checkout rout by brwoser can get ! without even have any item + back ! we have to prevent it from back

// , work on notification swall when addTocart

//about and contact desgin

