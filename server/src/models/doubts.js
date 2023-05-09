const mongoose = require("mongoose");

let doubtSchema = new mongoose.Schema({
  title: { type: String },
  content: { type: String },
  author: { type: String },
  authorId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  answered: { type: Boolean },
  votes: { type: Number },
  subject: { type: String },
  unit: { type: String },
});

const doubtModel = mongoose.model("doubts", doubtSchema);
module.exports = doubtModel;
