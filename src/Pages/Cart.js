import { useContext } from "react";
import { CartContext } from "../CartContext";
import { Link } from "react-router-dom";

const Cart=()=>{

const {cart,increase,decrease}=useContext(CartContext);

const total=cart.reduce((a,b)=>a+b.discount*b.qty,0);

return(

<div className="container py-5">

<h2>Your Cart</h2>

{cart.length===0 && <p>No items added</p>}

{cart.map(p=>(

<div key={p.id}
className="card p-3 mb-3 d-flex flex-row align-items-center">

<img src={p.img}
style={{height:80,width:80,objectFit:"contain"}}/>

<div className="ms-3 flex-grow-1">
<h6>{p.name}</h6>
<div>₹{p.discount}</div>
</div>

<div>

<button
className="btn btn-outline-dark btn-sm"
onClick={()=>decrease(p.id)}
>
−
</button>

<span className="mx-2">{p.qty}</span>

<button
className="btn btn-outline-dark btn-sm"
onClick={()=>increase(p.id)}
>
+
</button>

</div>

</div>

))}

{cart.length>0 &&(

<div className="mt-4">

<h4>Total Price : ₹{total}</h4>

<Link to="/checkout" className="btn btn-success w-100 mt-3">
Buy Now
</Link>

</div>

)}

</div>

);
};

export default Cart;