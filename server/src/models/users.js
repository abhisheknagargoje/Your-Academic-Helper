const mongoose = require("mongoose");

let UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: { type: String },
  lastName: { type: String },
  phoneNumber: { type: String },
  classDiv: { type: String },
  year: { type: Number },
  email: { type: String },
});

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;
