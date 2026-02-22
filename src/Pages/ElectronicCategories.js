import React from "react";
import { useNavigate } from "react-router-dom";   // ⭐ ADD THIS
import "./ElectronicCategories.css";

import pc1 from "../assets/pc1.avif";
import pc2 from "../assets/pc2.avif";
import pc3 from "../assets/pc3.avif";
import pc4 from "../assets/pc4.avif";
import pc5 from "../assets/pc5.avif";
import pc6 from "../assets/pc6.avif";
import pc7 from "../assets/pc7.avif";
import pc8 from "../assets/pc8.avif";

const categories = [
  { name: "Mobiles", img: pc1 },
  { name: "Laptops", img: pc2 },
  { name: "SmartTV", img: pc3 },
  { name: "Drone", img: pc4 },
  { name: "Headphone", img: pc5 },
  { name: "Speaker", img: pc6 },
  { name: "tablet", img: pc7 },
  { name: "smartwatch", img: pc8 },
];

const ElectronicCategories = () => {

  const navigate = useNavigate();   // ⭐ ADD THIS

  return (
    <div className="container">
      <h2 className="text-center mb-5 fw-bold">Our Product</h2>

      <div className="row">
        {categories.map((cat, i) => (
          <div key={i} className="col-lg-3 col-md-4 col-6 mb-4">

            {/* ⭐ CLICK ENABLED HERE */}
            <div
              className="electronic-box text-center p-3 h-100"
              style={{cursor:"pointer"}}
              onClick={()=>navigate(`/category/${cat.name}`)}
            >

              <img src={cat.img} alt="" className="img-fluid mb-3" />

              <h6 className="fw-semibold">{cat.name}</h6>

              <button className="btn btn-link p-0 see-more">
                See More →
              </button>

            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default ElectronicCategories;