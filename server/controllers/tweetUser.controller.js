const TweetAPI = require("../api/twitter.api");

async function TWEETUSER({ query }) {
  const userID = await TweetAPI.get(
    `https://api.twitter.com/2/users/by?usernames=${query}`
  ).then((res) => {
    return res.data;
  });
  var getID = userID.data.map((id) => {
    return id.id;
  });
  var user_id = getID.toString();

  const userTimeline = await TweetAPI.get(
    `https://api.twitter.com/2/users/${user_id}/tweets?max_results=15`
  ).then((response) => {
    return response.data;
  });
  const userDataTimeline = userTimeline.data.map((userDataTimelines) => {
    return userDataTimelines;
  });
  return userDataTimeline;
}

module.exports = TWEETUSER;
