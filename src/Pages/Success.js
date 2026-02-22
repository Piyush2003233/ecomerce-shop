import { useContext,useEffect } from "react";
import { CartContext } from "../CartContext";

const Success=()=>{

const {cart}=useContext(CartContext);

useEffect(()=>{

let msg="New Order:%0A";

cart.forEach(p=>{
msg+=`${p.name} x ${p.qty}%0A`;
});

window.open(`https://wa.me/91XXXXXXXXXX?text=${msg}`);

localStorage.removeItem("cart");

},[]);

return(
<div className="container py-5 text-center">
<h1>✅ Order Placed Successfully</h1>
</div>
);
};

export default Success;