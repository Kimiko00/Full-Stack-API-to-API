const nistApi = require("../api/nist.api");

async function NIST({ query, limit, page }) {
  const y = await nistApi
    .get(
      `/rest/json/cves/2.0?keywordSearch=${query}&resultsPerPage=${limit}&startIndex=${page}`
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
