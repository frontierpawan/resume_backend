const experienceService = require("../services/experienceSerice");

exports.getAllExperience = async (req, res) => {
  try {
    const experiences = await experienceService.getAllExperience();
    res.json({ data: experiences, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createExperience = async (req, res) => {
  try {
    const experience = await experienceService.createExperience(req.body);
    res.json({ data: experience, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getExperienceById = async (req, res) => {
  try {
    const experience = await experienceService.getExperienceById(req.params.id);
    res.json({ data: experience, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateExperience = async (req, res) => {
  try {
    const experience = await experienceService.updateExperience(
      req.params.id,
      req.body
    );
    res.json({ data: experience, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteExperience = async (req, res) => {
  try {
    const experience = await experienceService.deleteExperience(req.params.id);
    res.json({ data: experience, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
