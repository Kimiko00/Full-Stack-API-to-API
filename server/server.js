const cors = require("cors");
const express = require("express");
const User = require("./routes/user.routes");
const data = require("./routes/nist.routes");
const stack = require("./routes/stack.routes");
const tweet = require("./routes/tweet.routes");
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

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.use("/nist", verifySignIn, data);

app.use("/stack", verifySignIn, stack);

app.use("/tweet", verifySignIn, tweet);

app.use("/user", User);

app.listen(5000, () => {
  console.log("app running on port 5000");
});
