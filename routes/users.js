const express = require("express");
const router = express.Router();

const user = require("../controllers/user");

// Get all users
router.get("/", user.list);

// Save user
router.post("/user", user.create);

// Edit or create a user
router.get("/user/:id?", user.edit);

router.put("/user/:id", user.update);

// Delete user
router.delete("/user/:id", user.delete);

// Detail user


module.exports = router;

