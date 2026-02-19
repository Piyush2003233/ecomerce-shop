import React from "react";
import "./About.css";
import aboutImg from "../assets/about.avif";

const About = () => {
  return (
    <>
   <section className="about-sp">
     <div className="about-header">
    <h1>About SP Electronic</h1>
  </div>
<br/>
  <div className="container"></div>
      <div className="container">

        <div className="row align-items-center">

          <div className="col-lg-6 mb-4">
            <img src={aboutImg} alt="" className="about-img"/>
          </div>

          <div className="col-lg-6">

            <h2 className="about-title">SP Electronic</h2>

            <p className="about-text">
              SP Electronic is your trusted destination for the latest
              electronics and gadgets. We offer premium quality products,
              unbeatable prices and fast delivery to give you the best
              shopping experience.
            </p>

            <button className="about-btn">Learn More</button>

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
};

export default About;