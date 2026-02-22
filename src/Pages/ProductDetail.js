import { useParams, Link } from "react-router-dom";
import products from "../data/products";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../CartContext";

const ProductDetail=()=>{

const {id}=useParams();
const {addToCart}=useContext(CartContext);

// ⭐ scroll top
useEffect(()=>{
window.scrollTo(0,0);
},[id]);

const delivery = new Date();
delivery.setDate(delivery.getDate() + 4);

let item=null;
let all=[];

Object.values(products).forEach(arr=>{
arr.forEach(p=>{
all.push(p);
if(String(p.id)===id) item=p;
});
});

// ⭐ images safe BEFORE hooks
const images=item?.images || (item?.img ? [item.img] : []);

// ⭐ HOOKS ALWAYS BEFORE ANY RETURN
const [main,setMain]=useState(images[0]);

useEffect(()=>{
if(images.length) setMain(images[0]);
},[id]);   // reset image on product change

// ⭐ NOW safe return
if(!item) return <h3 className="p-5">Product not found</h3>;

let related=[];

Object.entries(products).forEach(([category,arr])=>{
if(arr.find(p=>String(p.id)===id)){
related=arr.filter(p=>p.id!==item.id).slice(0,4);
}
});

return(

<div className="container py-5">

<div className="row">

{/* IMAGE */}
<div className="col-md-6">

<div style={{border:"1px solid #ddd",padding:10,overflow:"hidden"}}>

<img
src={main}
style={{width:"100%",height:420,objectFit:"contain"}}
/>

</div>

<div className="d-flex mt-3 gap-2">

{images.map((img,i)=>(
<img key={i}
src={img}
style={{
width:70,
height:70,
objectFit:"contain",
border:"1px solid #ddd",
cursor:"pointer"
}}
onClick={()=>setMain(img)}
/>
))}

</div>

</div>

{/* DETAILS */}
<div className="col-md-6">

<h2>{item.name}</h2>
<div className="text-warning">⭐ {item.rating}</div>

<div>
<del>₹{item.price}</del>
<h3 className="text-danger">₹{item.discount}</h3>
</div>

<p>{item.desc}</p>

<p style={{color:"green",fontWeight:"bold"}}>
Delivery by {delivery.toDateString()}
</p>

<button className="btn btn-dark mt-3" onClick={()=>addToCart(item)}>
Add To Cart
</button>

</div>

</div>

{/* RELATED */}
<h3 className="mt-5">Related</h3>

<div className="row">

{related.map(p=>(
<div key={p.id} className="col-md-3">

<Link to={`/item/${p.id}`} style={{textDecoration:"none",color:"black"}}>

<div className="card p-2 text-center">

<img src={p.img} style={{height:140,objectFit:"contain"}}/>

<h6>{p.name}</h6>

<div className="text-danger">₹{p.discount}</div>

</div>

</Link>

</div>
))}

</div>

</div>

);
};

export default ProductDetail;