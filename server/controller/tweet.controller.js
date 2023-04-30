const TweetAPI = require("../api/twitter.api");
const TweetUser = require("../api/twitterUser.api");

async function TWEET({ query, limit }) {
  const n = await TweetAPI.get(
    `/2/tweets/search/recent?query=${query}&max_results=${limit}&tweet.fields=author_id&expansions=attachments.media_keys&media.fields=url`
  )
    .then((res) => {
      // loop kedalam semua data di include.media
      // kemudian simpan sebagai dict baru
      var includeMap = {};
      var includeLoop =
        res.data.includes.media.length > 0
          ? res.data.includes.media.forEach((incl) => {
              if (!incl.hasOwnProperty(incl.media_key))
                includeMap[incl.media_key] = incl;
            })
          : "";
      console.log("include map: ", includeMap);

      // checking by the media_keys
      // if have the same keys then append
      var b = res.data.data.map((x) => {
        var singleAttachment = [];

        if (x.attachments)
          x.attachments.media_keys.forEach((media_q) => {
            if (includeMap.hasOwnProperty(media_q))
              singleAttachment.push(includeMap[media_q]);
          });

        return {
          author_id: x.author_id,
          text: x.text,
          attach:
            !x.attachments || !singleAttachment ? undefined : singleAttachment,
        };
      });
      return { results: b, err: null };
    })
    .catch((e) => {
      console.log("err : ", e);
      return {
        results: null,
        err: e.message,
      };
    });
  return n.err ? n.err : n.results;
}

module.exports = TWEET;
