const nistApi = require("../../api/nist.api");

async function NIST({ query, limit, page }) {
  const nistData = await nistApi
    .get(
      `/rest/json/cves/2.0?keywordSearch=${query}&resultsPerPage=${limit}&startIndex=${page}`
    )
    .then((res) => {
      return res.data;
    });
  // change the timestamp to date
  const dateString = nistData.timestamp;
  const date = new Date(dateString);

  var dataCve = nistData.vulnerabilities.map((datas) => {
    // change the timestamp to date
    const publishedString = datas.cve.published;
    const modifiedString = datas.cve.lastModified;
    const publishedDate = new Date(publishedString);
    const modifiedDate = new Date(modifiedString);

    return {
      id: datas.cve.id,
      date: date.toDateString(),
      published: publishedDate.toDateString(),
      modified: modifiedDate.toDateString(),
      status: datas.cve.vulnStatus,
      description: datas.cve.descriptions[0].value.replace(/\n/g, ""),
      serverity: datas.cve.metrics.cvssMetricV2[0].baseSeverity,
      ...(datas.cve.references && datas.cve.references.length > 0
        ? {
            link:
              datas.cve.references[3] ||
              datas.cve.references[2] ||
              datas.cve.references[1] ||
              datas.cve.references[0],
          }
        : {}),
    };
  });
  return dataCve;
}
module.exports = NIST;
