import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-md navbar-dark custom-header fixed-top">
      <div className="container-fluid px-4">

        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="logo" width="55" />
        </Link>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapse Content */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>

          {/* Center Menu */}
          <ul className="navbar-nav mx-auto text-center">

            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/products" onClick={() => setIsOpen(false)}>
                Products
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </li>

          </ul>

          {/* Right Side */}
          <div className="d-flex align-items-center justify-content-center mt-3 mt-md-0">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
            />
            <button className="btn btn-outline-light me-3">Search</button>

            <Link to="/cart" className="text-white fs-4 me-3">
              🛒
            </Link>

            <Link to="/Auth" className="text-white fs-4">
              👤
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
