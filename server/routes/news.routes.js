const express = require("express");
const NEWS = require("../controllers/news.controller");

const router = express.Router();

router.get("/news", async (req, res) => {
  const newsData = await NEWS();
  res.send(newsData);
});

module.exports = router;
