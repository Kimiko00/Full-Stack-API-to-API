const axios = require("axios");
const stackApi = axios.create({
  baseURL:
    "https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&site=stackoverflow",
});

module.exports = stackApi;
