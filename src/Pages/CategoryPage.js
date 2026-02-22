import { useParams, Link } from "react-router-dom";
import products from "../data/products";
import { useContext } from "react";
import { CartContext } from "../CartContext";

const CategoryPage=()=>{

const {name}=useParams();
const {addToCart}=useContext(CartContext);

// ⭐ get products by category
const list=products[name] || [];

return(

<div className="container py-5">

<h2 className="mb-4 text-capitalize">{name}</h2>

<div className="row">

{list.map(p=>(

<div key={p.id} className="col-md-3 mb-4">

<div className="card p-2 text-center h-100">

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

<button className="btn btn-dark mt-2" onClick={()=>addToCart(p)}>
Add To Cart
</button>

</div>

</div>

))}

</div>

</div>

);
};

export default CategoryPage;