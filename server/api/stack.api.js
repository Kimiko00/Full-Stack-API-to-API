const axios = require("axios");
require("dotenv").config();

const stackApi = axios.create({
  baseURL: process.env.STACKOVERFLOW,
});

module.exports = stackApi;
