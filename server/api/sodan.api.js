const axios = require("axios");
require("dotenv").config();

const sodanApi = axios.create({
  baseURL: process.env.SODAN,
});

module.exports = sodanApi;
