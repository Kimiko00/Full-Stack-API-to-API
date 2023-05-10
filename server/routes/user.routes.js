const express = require("express");

const {
  createUser,
  userSignIn,
  getDataUser,
  getAllDataUser,
} = require("../controllers/user.controller");

const {
  validateUserSignUp,
  validateUserSignIn,
  validateUserRoles,
} = require("../middleware/verifyUser.middleware");
const verifySignIn = require("../middleware/auth.middleware");

const router = express.Router();

router.post("/create-user", validateUserSignUp, createUser);

router.post("/sign-in", validateUserSignIn, userSignIn);

router.get("/user", verifySignIn, validateUserRoles("user"), getDataUser);

router.get(
  "/get-all-user",
  verifySignIn,
  validateUserRoles("admin"),
  getAllDataUser
);

// update current log-in user
router.get("/update-user");

// update all user data
router.get("/update-all");

router.get("/delete-user");

module.exports = router;
