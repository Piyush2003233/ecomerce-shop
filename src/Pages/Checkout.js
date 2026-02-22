import { useContext, useState } from "react";
import { CartContext } from "../CartContext";
import { useNavigate } from "react-router-dom";

const Checkout=()=>{

const {cart}=useContext(CartContext);
const navigate=useNavigate();

const [form,setForm]=useState({
name:"",
phone:"",
address:""
});

const total=cart.reduce((a,b)=>a+b.discount*b.qty,0);

const submit=e=>{
e.preventDefault();
navigate("/payment");
};

return(

<div className="container py-5" style={{maxWidth:600}}>

<h2>Checkout</h2>

<form onSubmit={submit}>

<input className="form-control mb-3"
placeholder="Full Name"
required
onChange={e=>setForm({...form,name:e.target.value})}
/>

<input className="form-control mb-3"
placeholder="Phone"
required
onChange={e=>setForm({...form,phone:e.target.value})}
/>

<textarea className="form-control mb-3"
placeholder="Address"
required
onChange={e=>setForm({...form,address:e.target.value})}
/>

<h5>Total : ₹{total}</h5>

<button className="btn btn-success w-100 mt-3">
Place Order
</button>

</form>

</div>

);

};

export default Checkout;