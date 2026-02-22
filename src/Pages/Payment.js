import { useNavigate } from "react-router-dom";

const Payment=()=>{

const nav=useNavigate();

return(

<div className="container py-5" style={{maxWidth:600}}>

<h2>Select Payment Method</h2>

<button className="btn btn-outline-dark w-100 mb-3">
💳 Credit / Debit Card
</button>

<button className="btn btn-outline-dark w-100 mb-3">
🏦 Net Banking
</button>

<button className="btn btn-outline-dark w-100 mb-3">
📱 UPI Payment
</button>

<button
className="btn btn-success w-100 mt-3"
onClick={()=>nav("/success")}
>
Confirm Payment
</button>

</div>

);

};

export default Payment;