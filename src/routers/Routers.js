import { Route, Routes, Navigate } from "react-router-dom";





import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Shop from "../pages/Shop";
import Checkout from "../pages/Checkout";
import ProductDetails from "../pages/ProductDetails";
import Login from "../pages/Login";
import Signup from "../pages/Signup";


const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to='/home' />} /> 
      <Route path="home" element={<Home />}/>
      <Route path="shop" element={<Shop />}/>
      <Route path="shop/:id" element={<ProductDetails />}/>
      <Route path="cart" element={<Cart />}/>
      <Route path="checkout" element={<Checkout />}/>
      <Route path="Login" element={<Login />}/>
      <Route path="signup" element={<Signup />}/>

    </Routes>
  )
}

export default Routers