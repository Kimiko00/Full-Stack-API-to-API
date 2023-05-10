const express = require("express");
const x = require("../controllers/nist.controller.axios");

const router = express.Router();

router.get("/data", async (req, res) => {
  const query = req.query;
  const limit = req.limit;
  const page = req.page;

  const dataNist = await x(query, limit, page);
  res.send(dataNist);
});

module.exports = router;
