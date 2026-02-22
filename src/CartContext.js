import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({children})=>{

// ⭐ पहले localStorage से load
const [cart,setCart]=useState(()=>{
const saved = localStorage.getItem("cart");
return saved ? JSON.parse(saved) : [];
});

// ⭐ हर change पर save
useEffect(()=>{
localStorage.setItem("cart",JSON.stringify(cart));
},[cart]);

// ADD
const addToCart=(product)=>{

setCart(prev=>{

const exist=prev.find(p=>p.id===product.id);

if(exist){
return prev.map(p=>
p.id===product.id ? {...p,qty:p.qty+1} : p
);
}

return [...prev,{...product,qty:1}];

});

};

// +
const increase=id=>{
setCart(prev=>prev.map(p=>p.id===id?{...p,qty:p.qty+1}:p));
};

// -
const decrease=id=>{
setCart(prev=>prev
.map(p=>p.id===id?{...p,qty:p.qty-1}:p)
.filter(p=>p.qty>0));
};

return(
<CartContext.Provider value={{cart,addToCart,increase,decrease}}>
{children}
</CartContext.Provider>
);
};
