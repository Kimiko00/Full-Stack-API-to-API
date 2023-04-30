const axios = require("axios");

const stackApi = axios.create({
  baseURL: "https://api.stackexchange.com/2.3/search/advanced",
});

module.exports = stackApi;
