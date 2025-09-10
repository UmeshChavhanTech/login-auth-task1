const express = require("express");
const router = express.Router();
const {
  createProfile,
  getProfiles,
  getProfileById,
  updateProfile,
  deleteProfile,
  healthCheck
} = require("../controllers/profileController");

router.get("/health", healthCheck);
router.post("/profiles", createProfile);
router.get("/profiles", getProfiles);
router.get("/profiles/:id", getProfileById);
router.put("/profiles/:id", updateProfile);
router.delete("/profiles/:id", deleteProfile);

module.exports = router;
