const axios = require("axios");
const express = require("express");

async function NIST({ query }, limit, page) {
  const y = await axios
    .get(
      `https://services.nvd.nist.gov/rest/json/cves/2.0?keywordSearch=${query}&resultsPerPage=${limit}&startIndex=${page}`
    )
    .then((res) => {
      return res.data;
    });
  var c = y.vulnerabilities.map((x) => {
    return x.cve;
  });
  return c;
}

module.exports = NIST;
