import { useParams, Link } from "react-router-dom";
import products from "../data/products";
import { useContext } from "react";
import { CartContext } from "../CartContext";
import { SearchContext } from "../SearchContext";

const CategoryProducts = ()=>{

const { name } = useParams();
const list = products[name] || [];

const { addToCart } = useContext(CartContext);
const { search } = useContext(SearchContext);

// ⭐ SEARCH FILTER
const filtered = list.filter(p =>
p.name.toLowerCase().includes(search.toLowerCase())
);

return(

<div className="container py-5">

<h2 className="mb-4">{name}</h2>

<div className="row">

{filtered.map(p=>(

<div key={p.id} className="col-lg-3 col-md-4 col-6 mb-4">

<div className="card p-3 h-100 shadow-sm d-flex flex-column">

{/* ⭐ CLICKABLE IMAGE → DETAIL PAGE */}
<Link to={`/item/${p.id}`}>
<img
src={p.img}
alt=""
style={{height:"180px",width:"100%",objectFit:"contain"}}
onError={(e)=>{
e.target.src="https://via.placeholder.com/200?text=Phone";
}}
/>
</Link>

<h6>{p.name}</h6>

<div>
<del>₹{p.price}</del>
<span className="text-danger ms-2 fw-bold">₹{p.discount}</span>
</div>

<p className="flex-grow-1">{p.desc}</p>

<div className="text-warning mb-2">⭐ {p.rating}</div>

<button
className="btn btn-dark w-100"
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

export default CategoryProducts;