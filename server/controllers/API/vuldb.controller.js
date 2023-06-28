const VuldbAPI = require("../../api/vuldb.api");
require("dotenv").config();

async function VULDB() {
  const vuldbData = await VuldbAPI.post(
    `/?api`,
    {
      apikey: process.env.API_KEY,
      recent: 1,
      details: 1,
    },
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  ).then((res) => {
    return res.data;
  });

  return vuldbData;
}

module.exports = VULDB;
