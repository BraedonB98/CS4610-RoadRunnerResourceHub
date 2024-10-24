const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const resourceSchema = new Schema({
  name: { type: String },
  search: [{ type: String }],
  description: { type: String },
  link: { type: String },
  image: { type: String },
  creator: { type: mongoose.Types.ObjectId, ref: "User" },
  users: [{ type: mongoose.Types.ObjectId, ref: "User" }],
});

module.exports = mongoose.model("resource", resourceSchema);
