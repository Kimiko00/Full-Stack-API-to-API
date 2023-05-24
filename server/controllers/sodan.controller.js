const sodanApi = require("../api/sodan.api");
require("dotenv").config();

async function SODAN({ query }) {
  const sodan = await sodanApi
    .get(
      `/shodan/host/search?key=${process.env.SODAN_KEY}&query=${query}&facets=country`
    )
    .then((res) => {
      return res.data;
    });
  sodanData = sodan.matches.map((datas) => {
    return datas;
  });
  return sodanData;
}

module.exports = SODAN;
