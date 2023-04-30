const express = require("express");
const y = require("../controller/nist.controller");
const body = require("../controller/body.controller");
const x = require("../controller/nist.controller.axios");

const router = express.Router();

router.get("/", async (req, res) => {
  const listData = await y();
  res.send(listData);
});

router.get("/data", async (req, res) => {
  const query = req.query;
  const limit = req.limit;
  const page = req.page;

  const dataNist = await x(query, limit, page);
  res.send(dataNist);
});

router.get("/body", (req, res) => {
  return body(req, res);
});

module.exports = router;
