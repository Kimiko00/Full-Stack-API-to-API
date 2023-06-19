const cheerio = require("cheerio");
const axios = require("axios");

function NEWS() {
  return axios
    .get("https://www.mandiant.com/resources/blog")
    .then((urlResponse) => {
      const $ = cheerio.load(urlResponse.data);
      const blogData = [];

      $("a.resources-card").each((i, element) => {
        const link = $(element).attr("href");
        const text = $(element).attr("title");
        blogData.push({ link, text });
      });

      return blogData;
    })
    .catch((error) => {
      console.error("Error:", error.message);
      return [];
    });
}

module.exports = NEWS;
