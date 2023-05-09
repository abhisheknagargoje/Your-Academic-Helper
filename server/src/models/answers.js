const mongoose = require("mongoose");

let answerSchema = new mongoose.Schema({
  content: { type: String },
  author: { type: String },
  solverId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  doubtId: { type: mongoose.Schema.Types.ObjectId, ref: "doubts" },
  votes: { type: Number },
});

const answerModel = mongoose.model("answers", answerSchema);
module.exports = answerModel;
