import React, { useState, useEffect } from "react";
import Nav from "../Nav/Nav";
import axios from "axios";
import Booking from "./Booking";
import "./Booking.css";
import Footer from "../Footer/Footer";

const URL = "http://localhost:5000/bookings";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

function Bookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchHandler().then((data) => setBookings(data.bookings));
  }, []);

  const handleDelete = (deletedId) => {
    setBookings((prev) => prev.filter((b) => b._id !== deletedId));
  };

  return (
    <div>
      <Nav />
      <div className="bookings-page">
        <h1 className="page-title">All Bookings</h1>
        <div className="bookings-grid">
          {bookings && bookings.length > 0 ? (
            bookings.map((booking) => (
              <Booking
                key={booking._id}
                booking={booking}
                onDelete={handleDelete}
              />
            ))
          ) : (
            <p className="no-bookings">No bookings available</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Bookings;
