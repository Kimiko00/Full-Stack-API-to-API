const express = require("express");
const TWEETUSER = require("../controllers/tweetUser.controller");

const router = express.Router();

router.get("/tweet-user", async (req, res) => {
  const query = req.query;

  const tweetUser = await TWEETUSER(query);
  res.send(tweetUser);
});

module.exports = router;
