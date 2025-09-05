const Booking = require("../Models/Booking");

// Create a booking
exports.createBooking = async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json({ message: "Booking saved", booking });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all bookings (for admin later)
exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
