const axios = require("axios");
require("dotenv").config();

const nistApi = axios.create({
  baseURL: process.env.NIST,
});

module.exports = nistApi;
