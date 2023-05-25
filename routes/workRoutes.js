const express = require("express");
const {
  getAllWork,
  createWork,
  getWorkById,
  updateWork,
  deleteWork,
} = require("../controllers/WorkController");

const router = express.Router();

router.route("/").get(getAllWork).post(createWork);
router.route("/:id").get(getWorkById).put(updateWork).delete(deleteWork);

module.exports = router;
