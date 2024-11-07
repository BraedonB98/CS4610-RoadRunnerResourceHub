const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String },
  imageUrl: { type: String },
  email: { type: String },
  phoneNumber: { type: String },
  password: { type: String },
  permissions: [{ type: String }],//Role -> will need to write helper function -> see https://medium.com/@nil041297/mastering-role-based-authorization-in-your-mern-app-a-comprehensive-guide-with-jwt-and-passport-js-d7693143b33b
  resources: [{ type: mongoose.Types.ObjectId, ref: "Resource" }],
});

module.exports = mongoose.model("User", userSchema);
