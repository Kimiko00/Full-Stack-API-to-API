const axios = require("axios");

const nistApi = axios.create({
  baseURL: "https://services.nvd.nist.gov/rest/json/cves/2.0",
});

module.exports = nistApi;
