const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  start: { type: Date, required: true },
  end: { type: Date, required: true },
  location: { type: String },
  meetUrl: { type: String },
  // other fields you need
});

module.exports = mongoose.model("Event", eventSchema);
