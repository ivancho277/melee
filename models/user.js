const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: false, unique: false },
  password: { type: String, required: false }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
