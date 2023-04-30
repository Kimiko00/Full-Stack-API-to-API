const axios = require("axios");
require("dotenv").config();

const bearerToken = process.env.TWITTER_BEARER_TOKEN;
console.log("string : ", bearerToken);
console.log("process: ", process.env);

const TweetAPI = axios.create({
  baseURL: "https://api.twitter.com",
  headers: {
    Authorization: `Bearer ${bearerToken}`,
  },
});

module.exports = TweetAPI;
