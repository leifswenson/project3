const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true},
  fullname: { type: String, required: true },
  school: { type: String, required: true },
});

const user = mongoose.model("user", userSchema);

module.exports = user;