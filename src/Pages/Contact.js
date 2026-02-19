import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {

  const form = useRef();
  const [msg,setMsg]=useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      form.current,
      "YOUR_PUBLIC_KEY"
    )
    .then(()=>{
      setMsg("Message Sent Successfully ✅");
      form.current.reset();
    })
    .catch(()=>{
      setMsg("Failed to send ❌");
    });
  };

  return (
    <>
    <section className="contact-page">

      <h1 className="contact-title">Contact SP Electronic</h1>

      <div className="contact-wrapper">

        {/* LEFT MAP */}
        <div className="contact-map">
          <iframe
            title="map"
            src="https://maps.google.com/maps?q=rajkot&t=&z=13&ie=UTF8&iwloc=&output=embed"
          />
        </div>

        {/* RIGHT FORM */}
        <form ref={form} onSubmit={sendEmail} className="contact-form">

          <div className="floating">
            <input name="name" required />
            <label>Name</label>
          </div>

          <div className="floating">
            <input type="email" name="email" required />
            <label>Email</label>
          </div>

          <div className="floating">
            <textarea name="message" required />
            <label>Message</label>
          </div>

          <button type="submit">Send Message</button>

          {msg && <p className="success">{msg}</p>}
        </form>

      </div>

      {/* WHATSAPP BUTTON */}
      <a
        href="https://wa.me/91XXXXXXXXXX"
        target="_blank"
        rel="noreferrer"
        className="whatsapp"
      >
        💬
      </a>

    </section>
<hr/>
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

export default Contact;