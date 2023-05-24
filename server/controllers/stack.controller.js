const stackApi = require("../api/stack.api");

async function STACK({ query }) {
  const z = await stackApi
    .get(
      `/2.3/search/advanced?order=desc&sort=activity&q=${query}&site=stackoverflow`
    )
    .then((res) => {
      return res.data;
    });
  var j = z.items.map((x) => {
    return x;
  });
  return j;
}

module.exports = STACK;
