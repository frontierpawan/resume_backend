const workService = require("../services/WorkService");

exports.getAllWork = async (req, res) => {
  try {
    const works = await workService.getAllWork();
    res.json({ data: works, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createWork = async (req, res) => {
  try {
    const work = await workService.createWork(req.body);
    res.json({ data: work, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getWorkById = async (req, res) => {
  try {
    const work = await workService.getWorkById(req.params.id);
    res.json({ data: work, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateWork = async (req, res) => {
  try {
    const work = await workService.updateWork(req.params.id, req.body);
    res.json({ data: work, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteWork = async (req, res) => {
  try {
    const work = await workService.deleteWork(req.params.id);
    res.json({ data: work, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
