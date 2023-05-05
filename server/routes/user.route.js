const express = require("express");
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  login,
} = require("../controllers/users.controller");

const verifyUser = require("../middlewares/auth.middleware");

const router = express.Router();

router.get("/users", verifyUser, getUsers);

router.get("/users/:id", verifyUser, getUserById);

router.post("/users", verifyUser, createUser);

router.patch("/users/:id", verifyUser, updateUser);

router.delete("/users/:id", verifyUser, deleteUser);

router.post("/login", login);

router.post("/token", verifyUser);

module.exports = router;
