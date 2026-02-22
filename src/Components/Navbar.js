import React,{useState,useContext} from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { CartContext } from "../CartContext";
import { SearchContext } from "../SearchContext";

const Navbar=()=>{

const [isOpen,setIsOpen]=useState(false);
const {cart}=useContext(CartContext);
const {setSearch}=useContext(SearchContext);
return(

<nav className="navbar navbar-expand-md navbar-dark custom-header fixed-top">
<div className="container-fluid px-4">

{/* Logo */}
<Link className="navbar-brand" to="/">
<img src={logo} alt="" width="55"/>
</Link>

{/* Toggle */}
<button className="navbar-toggler" onClick={()=>setIsOpen(!isOpen)}>
<span className="navbar-toggler-icon"></span>
</button>

<div className={`collapse navbar-collapse ${isOpen?"show":""}`}>

{/* CENTER MENU */}
<ul className="navbar-nav mx-auto text-center">

<li className="nav-item">
<Link className="nav-link" to="/">Home</Link>
</li>

<li className="nav-item">
<Link className="nav-link" to="/product">Products</Link>
</li>

<li className="nav-item">
<Link className="nav-link" to="/about">About</Link>
</li>

<li className="nav-item">
<Link className="nav-link" to="/contact">Contact</Link>
</li>

</ul>

{/* RIGHT SIDE */}
<div className="d-flex align-items-center">

{/* SEARCH वापस */}
<input
className="form-control me-2"
placeholder="Search products..."
onChange={e=>setSearch(e.target.value)}
/>

<button className="btn btn-outline-light me-3">
Search
</button>

{/* CART */}
<Link to="/cart" className="text-white fs-4 me-3 position-relative">

🛒

{cart.length>0 &&(
<span style={{
position:"absolute",
top:-8,
right:-10,
background:"red",
color:"#fff",
borderRadius:"50%",
padding:"2px 6px",
fontSize:12
}}>
{cart.length}
</span>
)}

</Link>

{/* USER */}
<Link to="/Auth" className="text-white fs-4">
👤
</Link>

</div>

</div>
</div>
</nav>

);
};

export default Navbar;  