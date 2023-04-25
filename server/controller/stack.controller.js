const stackApi = require("../api/stack.api");

async function STACK({ search }) {
  const z = await stackApi.get(`&intitle=${search}`).then((res) => {
    return res.data;
  });
  return z;
}

module.exports = STACK;
