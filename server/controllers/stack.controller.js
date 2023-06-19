const stackApi = require("../api/stack.api");

async function STACK({ query }) {
  const stackData = await stackApi
    .get(
      `/2.3/search/advanced?order=desc&sort=activity&q=${query}&site=stackoverflow`
    )
    .then((res) => {
      return res.data;
    });
  var dataStack = stackData.items.map((datas) => {
    return datas;
  });
  return dataStack;
}

module.exports = STACK;
