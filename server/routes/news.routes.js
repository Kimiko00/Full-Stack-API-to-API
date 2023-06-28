const express = require("express");
const NEWS = require("../controllers/NEWS/mandiant.controller");

const router = express.Router();

router.get("/mandiant", async (req, res) => {
  const newsData = await NEWS();
  res.send(newsData);
});

module.exports = router;
