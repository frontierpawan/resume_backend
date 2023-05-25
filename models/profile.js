const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  name: String,
  designation: String,
  cv: String,
  github: String,
  linkedin: String,
  desc: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Profile", profileSchema);
