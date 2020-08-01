const mongoose = require("mongoose");

const roomsSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  kind: {
    type: String,
    required: true,
  },
  bed: {
    type: Number,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  available: {
    type: Boolean,
  },
  description: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Rooms", roomsSchema);
