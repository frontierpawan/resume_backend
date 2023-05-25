const express = require("express");
const {
  getAllExperience,
  createExperience,
  getExperienceById,
  updateExperience,
  deleteExperience,
} = require("../controllers/ExperienceController");

const router = express.Router();

router.route("/").get(getAllExperience).post(createExperience);
router
  .route("/:id")
  .get(getExperienceById)
  .put(updateExperience)
  .delete(deleteExperience);

module.exports = router;
