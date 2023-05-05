const express = require("express");

function getBody(req, res) {
  return res.json(req.body);
}

module.exports = getBody;
