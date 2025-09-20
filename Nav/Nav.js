// rfce
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="nav-logo">🌿 Sath Villa Naadi Ayurveda Resort</div>

      {/* Hamburger Icon */}
      <div
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Nav Links */}
      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li><Link to="/home" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="/ayurveda" onClick={() => setIsOpen(false)}>Ayurveda</Link></li>
        <li><Link to="/bookings" onClick={() => setIsOpen(false)}>Bookings</Link></li>
        <li><Link to="/add_booking" onClick={() => setIsOpen(false)}>New Booking</Link></li>
        <li><Link to="/products" onClick={() => setIsOpen(false)}>Ayurveda Product</Link></li>
        <li><Link to="/add_product" onClick={() => setIsOpen(false)}>Add Product</Link></li>
        <li><Link to="/inquire" onClick={() => setIsOpen(false)}>Inquire</Link></li>
        <li><Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
