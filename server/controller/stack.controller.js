const stackApi = require("../api/stack.api");

async function STACK({ query }) {
  const z = await stackApi
    .get(`?order=desc&sort=activity&q=${query}&site=stackoverflow`)
    .then((res) => {
      return res.data;
    });
  return z;
}

module.exports = STACK;
