const ProfileModel = require("../models/profile");

exports.getAllProfile = async () => {
  return await ProfileModel.find();
};

exports.createProfile = async (blog) => {
  return await ProfileModel.create(blog);
};
exports.getProfileById = async (id) => {
  return await ProfileModel.findById(id);
};

exports.updateProfile = async (id, blog) => {
  return await ProfileModel.findByIdAndUpdate(id, blog);
};

exports.deleteProfile = async (id) => {
  return await ProfileModel.findByIdAndDelete(id);
};
