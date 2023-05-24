const cors = require("cors");
const express = require("express");
const User = require("./routes/user.routes");
const data = require("./routes/nist.routes");
const stack = require("./routes/stack.routes");
const tweet = require("./routes/tweet.routes");
const sodan = require("./routes/sodan.routes");
const news = require("./routes/news.routes");
const tweetUser = require("./routes/tweetUser.routes");
const verifySignIn = require("./middleware/auth.middleware");

require("dotenv").config();
require("./config/db.config");

app = express();

app.use(
  cors({
    Credential: true,
    origin: "http://localhost:3000",
  })
);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/data", data);

app.use("/data", stack);

app.use("/data", tweet);

app.use("/data", sodan);

app.use("/data", tweetUser);

app.use("/data", news);

app.use("/user", User);

app.listen(5000, () => {
  console.log("app running on port 5000");
});
