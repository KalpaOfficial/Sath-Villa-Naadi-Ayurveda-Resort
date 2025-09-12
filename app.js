const express = require("express");
const mongoose = require("mongoose");

const bookingRouter = require("./Routes/bookingRoutes");

const app = express();
const cors = require("cors");

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/bookings", bookingRoutes);

// Database Connection
mongoose
  .connect("mongodb+srv://kalpade_silva:Imayuru123@cluster0.c04uqnl.mongodb.net/")
  .then(() => console.log("✅ Connected to MongoDB"))
  .then(() => {
    app.listen(5000, () => console.log("🚀 Server running on port 5000"));
  })
  .catch((err) => console.log(err));
