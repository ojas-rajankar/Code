const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  address: { type: String, required: true },
  token: { type: String, required: true }
});

module.exports = mongoose.model("Posts", PostSchema);
