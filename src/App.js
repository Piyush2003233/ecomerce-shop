import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./Pages/Products";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import "./App.css"
import Auth from "./Pages/Auth";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App() {
  return (
    <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/products" element={<Products/>}/>
    <Route path="/auth" element={<Auth/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/contact" element={<Contact/>} />
  </Routes>
</BrowserRouter>
  );
}

export default App;
