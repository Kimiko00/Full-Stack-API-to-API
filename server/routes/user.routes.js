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

// @desc      User Register
// @Route     POST /user/register
// @Access    Public
router.post("/register", validateUserSignUp, createUser);

// @desc      User Sign In
// @Route     POST /user/sign-in
// @Access    Public
router.post("/sign-in", validateUserSignIn, userSignIn);

// @desc      User Profile
// @Route     POST /user/profile
// @Access    Private
// @Role      User
router
  .route("/profile")
  .get(verifySignIn, validateUserRoles("user"), getDataUser);

// update current log-in user
router.get("/update-user");

// @desc      All User Profile
// @Route     POST /user/user-list
// @Access    Private
// @Role      admin
router.get(
  "/user-list",
  verifySignIn,
  validateUserRoles("admin"),
  getAllDataUser
);

// update all user data
router.get("/update-all");

router.get("/delete-user");

module.exports = router;
