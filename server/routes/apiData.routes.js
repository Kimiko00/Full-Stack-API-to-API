const express = require("express");
const nistData = require("../controllers/nist.controller.axios");
const stackData = require("../controllers/stack.controller");
const tweetData = require("../controllers/tweet.controller");
const tweetUserData = require("../controllers/tweetUser.controller");
const vuldbData = require("../controllers/vuldb.controller");

const router = express.Router();

router.get("/nist", async (req, res) => {
  const query = req.query;
  const limit = req.limit || 15;
  const page = req.page || 1;

  const dataNist = await nistData(query, limit, page);
  res.send(dataNist);
});

router.get("/stack", async (req, res) => {
  const query = req.query;

  const dataStack = await stackData(query);
  res.send(dataStack);
});

router.get("/tweet-feed", async (req, res) => {
  const query = req.query;
  const limit = req.query.limit || 15;

  const dataTweet = await tweetData(query, limit);
  res.send(dataTweet);
});

router.get("/tweet-user", async (req, res) => {
  const query = req.query;

  const dataTweetUser = await tweetUserData(query);
  res.send(dataTweetUser);
});

router.post("/vuldb", async (req, res) => {
  const dataVuldb = await vuldbData();
  res.send(dataVuldb);
});

module.exports = router;
