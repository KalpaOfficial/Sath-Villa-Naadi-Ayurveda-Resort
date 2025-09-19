import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Booking({ booking, onDelete }) {
  const {
    b_name,
    b_email,
    b_phone,
    b_packageDuration,
    b_checkInDate,
    b_guest,
    b_createdAt,
    _id,
  } = booking;

  const deleteHandler = async () => {
    if (window.confirm("⚠️ Are you sure you want to delete this booking?")) {
      try {
        await axios.delete(`http://localhost:5000/bookings/${_id}`);
        alert("✅ Booking deleted successfully!");
        if (onDelete) onDelete(_id);
      } catch (err) {
        console.error(err);
        alert("❌ Failed to delete booking");
      }
    }
  };

  return (
    <div className="booking-card">
      <div className="booking-details">
        <h3 className="booking-name">{b_name}</h3>
        <p className="booking-meta">
          <strong>Email:</strong> {b_email || "N/A"}
        </p>
        <p className="booking-meta">
          <strong>Phone:</strong> {b_phone}
        </p>
        <p className="booking-meta">
          <strong>Package:</strong> {b_packageDuration}
        </p>
        <p className="booking-meta">
          <strong>Check-In:</strong>{" "}
          {new Date(b_checkInDate).toLocaleDateString()}
        </p>
        <p className="booking-meta">
          <strong>Guests:</strong> {b_guest}
        </p>
        <p className="booking-meta">
          <strong>Booked At:</strong>{" "}
          {new Date(b_createdAt).toLocaleString()}
        </p>

        <div className="booking-actions">
          <Link to={`/bookings/${_id}`}>
            <button className="btn update-btn">Update</button>
          </Link>
          <button className="btn delete-btn" onClick={deleteHandler}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Booking;
