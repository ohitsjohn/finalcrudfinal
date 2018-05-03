const express = require("express");
const router = express.Router();

const user = require("../controllers/user");

// Get all users
router.get("/", user.list);

// Save user
router.post("/user", user.create);

// Edit or create a user
router.get("/user/:id?", user.edit);

module.exports = router;

