const express = require("express");
const {
  getAllProfile,
  createProfile,
  getProfileById,
  updateProfile,
  deleteProfile,
} = require("../controllers/ProfileController");

const router = express.Router();

router.route("/").get(getAllProfile).post(createProfile);
router
  .route("/:id")
  .get(getProfileById)
  .put(updateProfile)
  .delete(deleteProfile);

module.exports = router;
