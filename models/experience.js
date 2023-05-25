const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const experienceSchema = new Schema({
  company: String,
  history: String,
  duration: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Experience", experienceSchema);
