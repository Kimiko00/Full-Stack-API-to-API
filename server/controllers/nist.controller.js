const express = require("express");

async function nist(props) {
  const x = await fetch(
    "https://services.nvd.nist.gov/rest/json/cves/2.0?keywordSearch=Microsoft&resultsPerPage=2&startIndex=0"
  )
    .then(async (res) => {
      return {
        resp: await res.json().then((data) => {
          return data;
        }),
        err: null,
      };
    })
    .catch((e) => {
      return {
        resp: null,
        err: e,
      };
    });
  console.log("results :", x);
  return x.err != null ? x.err : x.resp.vulnerabilities;
}

module.exports = nist;
