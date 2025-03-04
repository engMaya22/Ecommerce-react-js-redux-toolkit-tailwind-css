import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import NotFound from "./pages/NotFound";




const App = () => {

  const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<MainLayout />}>
                  <Route index element={<Home />}></Route>
                  <Route path="/shop" element={<Shop />}></Route>
                  <Route path="*" element={<NotFound />}></Route>

        </Route>
      )
  );



  return (
    <RouterProvider router={router} />

   
  )
}

export default App

// flex-1 makes item shrink to be all remain space like in navbar