const ExperienceModel = require("../models/experience");

exports.getAllExperience = async () => {
  return await ExperienceModel.find();
};

exports.createExperience = async (blog) => {
  return await ExperienceModel.create(blog);
};
exports.getExperienceById = async (id) => {
  return await ExperienceModel.findById(id);
};

exports.updateExperience = async (id, blog) => {
  return await ExperienceModel.findByIdAndUpdate(id, blog);
};

exports.deleteExperience = async (id) => {
  return await ExperienceModel.findByIdAndDelete(id);
};
