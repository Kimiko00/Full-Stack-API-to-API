const express = require("express");
const SODAN = require("../controllers/sodan.controller.js");

const router = express.Router();

router.get("/sodan", async (req, res) => {
  const query = req.query;

  const sodanData = await SODAN(query);
  res.send(sodanData);
});

module.exports = router;
