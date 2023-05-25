const WorkModel = require("../models/work");

exports.getAllWork = async () => {
  return await WorkModel.find();
};

exports.createWork = async (blog) => {
  return await WorkModel.create(blog);
};
exports.getWorkById = async (id) => {
  return await WorkModel.findById(id);
};

exports.updateWork = async (id, blog) => {
  return await WorkModel.findByIdAndUpdate(id, blog);
};

exports.deleteWork = async (id) => {
  return await WorkModel.findByIdAndDelete(id);
};
