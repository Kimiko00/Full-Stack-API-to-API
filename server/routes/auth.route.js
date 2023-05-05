const express = require("express");
const { Me } = require("../controllers/auth.controller");

const router = express.Router();

router.get("/me", Me);

// router.post("/login", login);

// router.delete("/logout", logOut);

module.exports = router;
