import React, { useEffect, useState } from "react";
import img1 from "../assets/home.jpg";
import img2 from "../assets/home1.jpg";
import img3 from "../assets/home2.jpg";
import img4 from "../assets/home3.jpg";

// import b1 from "../assets/b1.avif";
// import b2 from "../assets/b2.avif";
// import b3 from "../assets/b3.avif";
// import b4 from "../assets/b4.avif";

import c1 from "../assets/Computers.jpg";
import c2 from "../assets/mobile.jpg";
import c3 from "../assets/Drones.jpg";
import c4 from "../assets/tablet.jpg";
import c5 from "../assets/tv.jpg";
// import c6 from "../assets/Wearable Tech.jpg";
import c7 from "../assets/speaker.jpg";
import c8 from "../assets/headphone.jpg";

import drone from "../assets/adrone.jpg";

// import os1 from "../assets/os1.avif";
// import os2 from "../assets/os2.avif";
// import os3 from "../assets/os3.avif";
// import os4 from "../assets/os4.avif";

import { FaMotorcycle, FaBoxOpen, FaTags, FaSyncAlt } from "react-icons/fa";
import { FaTag } from "react-icons/fa";

const images = [img1, img2, img3, img4];

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(slider);
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${images[index]})` }}
      >
        <div className="hero-content">
          <h1>Incredible Prices on All Your Favorite Items</h1>
          <p>Get more for less on selected brands</p>
          <button className="btn btn-primary px-4 py-2">Shop Now</button>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <div className="features-wrapper py-5" style={{ background: "#c6d5e0" }}>
        <div className="container py-5 rounded-4 bg-white shadow">
          <div className="row text-center">
            <div className="col-md-3 col-6 mb-4">
              <FaMotorcycle size={40} />
              <h6 className="mt-3">Curb-side pickup</h6>
            </div>

            <div className="col-md-3 col-6 mb-4">
              <FaBoxOpen size={40} />
              <h6 className="mt-3">Free shipping on orders over $50</h6>
            </div>

            <div className="col-md-3 col-6 mb-4">
              <FaTags size={40} />
              <h6 className="mt-3">Low prices guaranteed</h6>
            </div>

            <div className="col-md-3 col-6 mb-4">
              <FaSyncAlt size={40} />
              <h6 className="mt-3">Available 24/7</h6>
            </div>
          </div>
        </div>
      </div>

      {/* BEST SELLERS */}

      <section className="best-seller-section rounded-4">
        <div className="container">
          <h2 className="best-title">Best Seller</h2>

          <div className="row g-4">
            <div className="col-md-3">
              <div className="product-card">
                <span className="sale-badge">SALE</span>
                <img src={require("../assets/b1.avif")} alt="" />
                <h6>Shel 50" Class LED 4K UHD Smart TV</h6>
                <div className="price-box">
                  <span className="old-price">$85.00</span>
                  <span className="new-price">$70.00</span>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="product-card">
                <span className="sale-badge">SALE</span>
                <img src={require("../assets/b2.avif")} alt="" />
                <h6>Fitboot Inspire Fitness Tracker</h6>
                <div className="price-box">
                  <span className="old-price">$85.00</span>
                  <span className="new-price">$70.00</span>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="product-card">
                <span className="sale-badge">SALE</span>
                <img src={require("../assets/b3.avif")} alt="" />
                <h6>Smartphone Z Pixel Max 128GB</h6>
                <div className="price-box">
                  <span className="old-price">$85.00</span>
                  <span className="new-price">$70.00</span>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="product-card">
                <span className="sale-badge">SALE</span>
                <img src={require("../assets/b4.avif")} alt="" />
                <h6>65" Class Nano LED 4K UHD Smart TV</h6>
                <div className="price-box">
                  <span className="old-price">$85.00</span>
                  <span className="new-price">$70.00</span>
                </div>
              </div>
            </div>
            <div className="text-center mt-4">
              <button className="view-btn">View All</button>
            </div>
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="best-seller-section rounded-4">
        <div className="category-section">
          <div className="container">
            <h2 className="category-title">Shop by Category</h2>

            <div className="category-grid">
              <div className="category-card">
                <div className="category-circle">
                  <img src={c1} alt="Computers" />
                </div>
                <p>Computers</p>
              </div>

              <div className="category-card">
                <div className="category-circle">
                  <img src={c2} alt="Mobile" />
                </div>
                <p>Mobile</p>
              </div>

              <div className="category-card">
                <div className="category-circle">
                  <img src={c3} alt="Drones" />
                </div>
                <p>Drones & Cameras</p>
              </div>

              <div className="category-item">
                <div className="sale-circle">
                  <FaTag className="sale-icon" />
                </div>
                <p>Sale</p>
              </div>

              <div className="category-card">
                <div className="category-circle">
                  <img src={c4} alt="Tablets" />
                </div>
                <p>Tablets</p>
              </div>

              <div className="category-card">
                <div className="category-circle best-circle">%</div>
                <p>Best Sellers</p>
              </div>

              <div className="category-card">
                <div className="category-circle">
                  <img src={c8} alt="Headphones" />
                </div>
                <p>Headphones</p>
              </div>

              <div className="category-card">
                <div className="category-circle">
                  <img src={c5} alt="Laptops" />
                </div>
                <p>T.V & Home Cinema</p>
              </div>

              <div className="category-card">
                <div className="category-circle">
                  <img src={c7} alt="Speakers" />
                </div>
                <p>Speakers</p>
              </div>

              <div className="category-card">
                <div className="category-circle">
                  <img src={c8} alt="Gaming" />
                </div>
                <p>Headphones</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* best price */}
      <section className="best-seller-section rounded-4">
        <div className="offer-section">
          <div className="offer-container">
            {/* LEFT CONTENT */}
            <div className="offer-content">
              <div className="badge-circle">
                Best
                <br />
                Price
              </div>

              <p className="save-text">Save up to</p>
              <h1 className="price">$150</h1>

              <p className="desc">
                on selected laptop <br /> & tablets brands
              </p>

              <p className="terms">Terms and conditions apply</p>

              <button className="shop-btn">Shop</button>
            </div>

            {/* RIGHT IMAGE */}
            <div className="offer-image">
              <img src={c1} alt="Laptop Setup" />
            </div>
          </div>
        </div>
      </section>

      {/* on sale */}
      <section className="best-seller-section rounded-4">
        <div className="container">
          <h2 className="best-title">On Sale</h2>

          <div className="row g-4">
            <div className="col-md-3">
              <div className="product-card">
                <span className="sale-badge">SALE</span>
                <img src={require("../assets/os1.avif")} alt="" />
                <h6>Space Moon Smartwatch With Charger</h6>
                <div className="price-box">
                  <span className="old-price">$85.00</span>
                  <span className="new-price">$70.00</span>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="product-card">
                <span className="sale-badge">SALE</span>
                <img src={require("../assets/os2.avif")} alt="" />
                <h6>OVE Light Space 5G, 128GB</h6>
                <div className="price-box">
                  <span className="old-price">$85.00</span>
                  <span className="new-price">$70.00</span>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="product-card">
                <span className="sale-badge">SALE</span>
                <img src={require("../assets/os3.avif")} alt="" />
                <h6>Pilates 16" Touch Screen Laptop 24GB Memory</h6>
                <div className="price-box">
                  <span className="old-price">$85.00</span>
                  <span className="new-price">$70.00</span>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="product-card">
                <span className="sale-badge">SALE</span>
                <img src={require("../assets/os4.avif")} alt="" />
                <h6>Turn5 Portable Bluetooth Speaker</h6>
                <div className="price-box">
                  <span className="old-price">$85.00</span>
                  <span className="new-price">$70.00</span>
                </div>
              </div>
            </div>
            <div className="text-center mt-4">
              <button className="view-btn">View All</button>
            </div>
          </div>
        </div>
      </section>

      {/* special offer */}
      <section className="best-seller-section rounded-4">
        <div className="offer-section">
          <div className="offer-container">
            {/* LEFT CONTENT */}
            <div className="offer-content">
              <div className="badge-circle1">
                Today
                <br />
                Special offer
              </div>
              <p className="desc1">Best Arial View in Town</p>
              <h1 className="price1">30%OFF</h1>

              <p className="terms1">on professional camera drones</p>
              <p className="terms1">
                Limited quantities. See product detail pages for availability.
              </p>
              <button className="shop-btn">Shop</button>
            </div>

            {/* RIGHT IMAGE */}
            <div className="offer-image1">
              <img src={drone} alt="Laptop Setup" />
            </div>
          </div>
        </div>
      </section>

      {/* brand */}
      <section className="best-seller-section-brand rounded-4">
      <div className="brands-section">
        <div className="brands-container">
          <h2 className="brands-title">Brands</h2>

          <div className="brands-grid">
            <div className="brand-box">SAMSUNG</div>
            <div className="brand-box">APPLE</div>
            <div className="brand-box">DJI</div>
            <div className="brand-box">VIVO</div>
            <div className="brand-box">JBL</div>
          </div>
        </div>
      </div>
      </section>

        {/* footer */}

        <footer className="footer">
    <div className="footer-container">

      {/* COLUMN 1 */}
      <div className="footer-col ">
        <h4>Store Location</h4>
        <p>500 Terry Francine Street</p>
        <p>San Francisco, CA 94158</p>
        <p>info@mysite.com</p>
        <p>123-456-7890</p>

        <div className="social-icons">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-youtube"></i>
        </div>
      </div>

      {/* COLUMN 2 */}
      <div className="footer-col shop-col">
        <h4>Shop</h4>
        <p>Shop All</p>
        <p>Computers</p>
        <p>Tablets</p>
        <p>Drones & Cameras</p>
        <p>Audio</p>
        <p>Mobile</p>
        <p>T.V & Home Cinema</p>
        <p>Wearable Tech</p>
        <p>Sale</p>
      </div>

      {/* COLUMN 3 */}
      <div className="footer-col">
        <h4>Customer Support</h4>
        <p>Contact Us</p>
        <p>Help Center</p>
        <p>About Us</p>
        <p>Careers</p>
      </div>

      {/* COLUMN 4 */}
      <div className="footer-col">
        <h4>Policy</h4>
        <p>Shipping & Returns</p>
        <p>Terms & Conditions</p>
        <p>Payment Methods</p>
        <p>FAQ</p>
      </div>

    </div>

    {/* Divider */}
    <div className="footer-divider"></div>

    {/* Payment Section */}
    <div className="payment-section">
    <p>We accept the following paying methods</p>

    <div className="payment-logos">
      <div className="pay visa">VISA</div>
      <div className="pay mastercard">
        <span className="mc1"></span>
        <span className="mc2"></span>
      </div>
      <div className="pay amex">AMEX</div>
      <div className="pay union">UnionPay</div>
      <div className="pay jcb">JCB</div>
      <div className="pay diners">Diners</div>
      <div className="pay discover">Discover</div>
      <div className="pay paypal">PayPal</div>
    </div>
  </div>

  </footer>
    </>
  );
}
