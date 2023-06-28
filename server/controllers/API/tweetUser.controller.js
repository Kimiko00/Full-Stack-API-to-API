const TweetAPI = require("../../api/twitter.api");

async function TWEETUSER({ query }) {
  const userID = await TweetAPI.get(
    `/2/users/by?usernames=${query}&user.fields=name,profile_image_url,url,username`
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

  // pick the user id from response json
  const user_id = getID[0].id;

  const userTimeline = await TweetAPI.get(
    `/2/users/${user_id}/tweets?max_results=15&tweet.fields=created_at,entities,source`
  )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log("error is: ", error);
    });

  if (!userTimeline.data) {
    return userTimeline.errors[0].detail;
  }

  const userDataTimeline = userTimeline.data.map((userDataTimelines) => {
    // change the timestamp to date
    const dateString = userDataTimelines.created_at;
    const date = new Date(dateString);

    return {
      text: userDataTimelines.text
        .replace(/https?:\/\/[^\s]+/g, "")
        .replace(/\n/g, ""),
      create_at: date.toDateString(),

      // checking if there any entities inculeded in the response json
      // then checking if there any url included
      ...(userDataTimelines.entities
        ? userDataTimelines.entities.urls &&
          userDataTimelines.entities.urls.length > 0
          ? {
              // use the last url for the link then the rest if any
              link:
                userDataTimelines.entities.urls[3] ||
                userDataTimelines.entities.urls[2] ||
                userDataTimelines.entities.urls[1] ||
                userDataTimelines.entities.urls[0],
            }
          : {}
        : {}),
    };
  });

  const result = {
    user: getID,
    feed: userDataTimeline,
  };
  return result;
}

module.exports = TWEETUSER;
