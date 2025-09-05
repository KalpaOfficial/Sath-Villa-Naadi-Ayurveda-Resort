const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  packageDuration: { type: String, enum: ["2 weeks", "3 weeks"], required: true },
  roomType: { type: String, enum: ["single", "double"], required: true },
  checkInDate: { type: Date, required: true },
  guests: { type: Number, default: 1 },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Booking", bookingSchema);
