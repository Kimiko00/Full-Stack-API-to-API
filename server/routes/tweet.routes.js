const express = require("express");
const router = express.Router();

const t = require("../controller/tweet.controller");

router.get("/data", async (req, res) => {
  const TweetData = await t();
  res.send(TweetData);
});

module.exports = router;
