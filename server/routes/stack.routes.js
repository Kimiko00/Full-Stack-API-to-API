const express = require("express");
const router = express.Router();

const m = require("../controller/stack.controller");

router.get("/data", async (req, res) => {
  const search = req.search;

  const stackData = await m(search);
  res.send(stackData);
});

module.exports = router;
