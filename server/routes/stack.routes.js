const express = require("express");
const router = express.Router();

const m = require("../controllers/stack.controller");

router.get("/data", async (req, res) => {
  const query = req.query;

  const stackData = await m(query);
  res.json(stackData);
});

module.exports = router;
