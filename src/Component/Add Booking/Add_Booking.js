import React, { useState } from "react";
import Nav from "../Nav/Nav";
import { useNavigate } from "react-router";
import axios from "axios";
import Footer from "../Footer/Footer";
import "../Add Booking/Add_Booking.css";

function Add_Booking() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    b_name: "",
    b_email: "",
    b_phone: "",
    b_packageDuration: "",
    b_checkInDate: "",
    b_guest: 1,
  });

  // handle text input change
  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // submit booking
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/bookings", inputs, {
        headers: { "Content-Type": "application/json" },
      });

      alert("✅ Booking submitted successfully!");

      // reset form
      setInputs({
        b_name: "",
        b_email: "",
        b_phone: "",
        b_packageDuration: "",
        b_checkInDate: "",
        b_guest: 1,
      });

      // redirect (you can change path)
      navigate("/bookings");
    } catch (err) {
      console.error(err);
      alert("❌ Failed to submit booking");
    }
  };

  return (
    <div>
      <Nav />
      <div className="form-container">
        <h2 className="form-title">Book Your Ayurveda Package</h2>
        <form onSubmit={handleSubmit} className="booking-form">
          {/* Name */}
          <label>Full Name</label>
          <input
            type="text"
            name="b_name"
            value={inputs.b_name}
            onChange={handleChange}
            required
          />

          {/* Email */}
          <label>Email</label>
          <input
            type="email"
            name="b_email"
            value={inputs.b_email}
            onChange={handleChange}
          />

          {/* Phone */}
          <label>Phone</label>
          <input
            type="tel"
            name="b_phone"
            value={inputs.b_phone}
            onChange={handleChange}
            required
          />

          {/* Package Duration */}
          <label>Package Duration</label>
          <select
            name="b_packageDuration"
            value={inputs.b_packageDuration}
            onChange={handleChange}
            required
          >
            <option value="">Select Duration</option>
            <option value="3 Days">3 Days</option>
            <option value="5 Days">5 Days</option>
            <option value="7 Days">7 Days</option>
            <option value="14 Days">14 Days</option>
          </select>

          {/* Check-In Date */}
          <label>Check-In Date</label>
          <input
            type="date"
            name="b_checkInDate"
            value={inputs.b_checkInDate}
            onChange={handleChange}
            required
          />

          {/* Guests */}
          <label>Number of Guests</label>
          <input
            type="number"
            name="b_guest"
            value={inputs.b_guest}
            onChange={handleChange}
            min="1"
            required
          />

          <button type="submit" className="submit-btn">
            Confirm Booking
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default Add_Booking;
