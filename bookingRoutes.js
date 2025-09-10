const express = require("express");
const {
  createBooking,
  getBookings,
  getBookingById,
  deleteBooking,
} = require("../Controllers/bookingController");

const router = express.Router();

router.post("/", createBooking);      // Create booking
router.get("/", getBookings);         // Get all bookings
router.get("/:id", getBookingById);   // Get single booking
router.delete("/:id", deleteBooking); // Delete booking

module.exports = router;
