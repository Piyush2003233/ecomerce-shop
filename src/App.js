import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./Pages/Products";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import "./App.css"
import Auth from "./Pages/Auth";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import ElectronicCategories from "./Pages/ElectronicCategories";
import CategoryProducts from "./Pages/CategoryProducts";
import Cart from "./Pages/Cart";
import { CartProvider } from "./CartContext";
import Checkout from "./Pages/Checkout";
import Success from "./Pages/Success";
import Payment from "./Pages/Payment";
import { SearchProvider } from "./SearchContext";
import ProductDetail from "./Pages/ProductDetail";
import AllProducts from "./Pages/AllProducts";
import CategoryPage from "./Pages/CategoryPage";
function App() {
  return (
  
   <CartProvider>

<SearchProvider>

<BrowserRouter>

<Navbar/>

<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/products" element={<Products/>}/>
<Route path="/auth" element={<Auth/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="/product" element={<ElectronicCategories/>}/>
{/* <Route path="/category/:name" element={<CategoryProducts/>}/> */}
<Route path="/cart" element={<Cart/>}/>
<Route path="/checkout" element={<Checkout/>}/>
<Route path="/success" element={<Success/>}/>
<Route path="/payment" element={<Payment/>}/>
<Route path="/item/:id" element={<ProductDetail/>}/>
<Route path="/shop" element={<AllProducts/>}/>
<Route path="/category/:name" element={<CategoryPage/>}/>
</Routes>

</BrowserRouter>

</SearchProvider>

</CartProvider>

  );
}

export default App;
