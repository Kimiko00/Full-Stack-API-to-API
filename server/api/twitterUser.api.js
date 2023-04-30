const axios = require("axios");

const TweetUser = axios.create({
  baseURL:
    "https://api.twitter.com/2/users/289888160?user.fields=profile_image_url",
});

module.exports = TweetUser;
