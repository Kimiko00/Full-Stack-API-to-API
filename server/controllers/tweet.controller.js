const TweetAPI = require("../api/twitter.api");

// NEED TO HANDLE ERROR IF THE USER ADD # SPACE OR EVERY UNIQ PARAM IN QUERY
// RETURN ERROR "PLEASE DON'T INSERT ANY UNIQ CHAR IN YOUR INPUT"
async function TWEET({ query }) {
  // change the inputed query into hastage search
  const hashtag = encodeURIComponent(`#${query}`);

  const tweetPost = await TweetAPI.get(
    `/2/tweets/search/recent?query=${hashtag}&max_results=15&tweet.fields=author_id,created_at,entities&expansions=attachments.media_keys&media.fields=url`
  ).then((res) => {
    return res.data;
  });
  const tweetData = tweetPost.data.map((datas) => {
    // change the timestamp to date
    const dateString = datas.created_at;
    const date = new Date(dateString);

    return {
      id: datas.author_id,
      text: datas.text.replace(/https?:\/\/[^\s]+/g, "").replace(/\n/g, ""),
      create_at: date.toDateString(),

      // checking if there any entities inculeded in the response json
      // then checking if there any url included
      ...(datas.entities
        ? datas.entities.urls && datas.entities.urls.length > 0
          ? {
              // use the last url for the link then the rest if any
              link:
                datas.entities.urls[3] ||
                datas.entities.urls[2] ||
                datas.entities.urls[1] ||
                datas.entities.urls[0],
            }
          : {}
        : {}),
    };
  });
  const authorID = tweetData.map((items) => items.id).join(",");
  // console.log(authorID);

  const userID = await TweetAPI.get(
    `/2/users?ids=${authorID}&user.fields=profile_image_url`
  ).then((res) => {
    return res.data;
  });

  const getID = userID.data.map((id) => {
    return {
      id: id.id,
      name: id.name,
      username: id.username,
      profile: id.profile_image_url,
    };
  });
  // combine 2 json from request using id
  // to get the user id and username from different api
  const mergeData = tweetData.map((id1) => {
    const id2 = getID.find((id2) => id2.id === id1.id);
    return {
      ...id1,
      ...id2,
    };
  });

  return mergeData;
}

module.exports = TWEET;
