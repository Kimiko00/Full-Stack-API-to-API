const axios = require("axios");
require("dotenv").config();

const apiKey = process.env.API_KEY;

const VuldbAPI = axios.create({
  baseURL: process.env.VULDB,
});

module.exports = VuldbAPI;
