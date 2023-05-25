const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workSchema = new Schema({
  title: String,
  desc: String,
  image: String,
  githubLink: String,
  siteLink: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Work", workSchema);
