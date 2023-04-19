const express = require("express");
const router = express.Router();
const y = require("../controller/nist.controller");
const x = require("../controller/nist.controller.axios");
const body = require("../controller/body.controller");

router.get("/", async (req, res) => {
  const listData = await y();
  res.send(listData);
});

router.get("/data", async (req, res) => {
  const query = req.query;
  const limit = req.query.limit;
  const page = req.query.page;

  const dataNist = await x(query, limit, page);
  res.send(dataNist);
});

router.get("/body", (req, res) => {
  return body(req, res);
});

module.exports = router;
