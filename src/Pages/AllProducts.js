import products from "../data/products";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../CartContext";

const AllProducts=()=>{

const {addToCart}=useContext(CartContext);

let all=[];

// ⭐ combine all categories
Object.values(products).forEach(arr=>{
arr.forEach(p=>all.push(p));
});

return(

<div className="container py-5">

<h2 className="mb-4">All Products</h2>

<div className="row">

{all.map(p=>(

<div key={p.id} className="col-md-3 mb-4">

<div className="card p-2 text-center h-100">

{/* CLICK IMAGE → DETAIL PAGE */}
<Link to={`/item/${p.id}`} style={{textDecoration:"none",color:"black"}}>

<img src={p.img}
style={{height:160,objectFit:"contain"}}
/>

<h6 className="mt-2">{p.name}</h6>

<div className="text-warning">⭐ {p.rating}</div>

<div>
<del>₹{p.price}</del>
<div className="text-danger fw-bold">₹{p.discount}</div>
</div>

</Link>

{/* ⭐ ADD TO CART DIRECT */}
<button
className="btn btn-dark mt-2"
onClick={()=>addToCart(p)}
>
Add To Cart
</button>

</div>

</div>

))}

</div>

</div>

);
};

export default AllProducts;