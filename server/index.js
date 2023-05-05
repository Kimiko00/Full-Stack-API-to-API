const cors = require("cors");
const express = require("express");
// const db = require("./config/db.config");
// const session = require("express-session");
const user = require("./routes/user.route");
const data = require("./routes/nist.route");
const stack = require("./routes/stack.route");
const tweet = require("./routes/tweet.route");
// const authRoute = require("./routes/auth.route");
const verifyUser = require("./middlewares/auth.middleware");
// const SequelizeStore = require("connect-session-sequelize");

require("dotenv").config();

app = express();

// const sessionStore = SequelizeStore(session.Store);

// const store = new sessionStore({
//   db: db,
// });

// (async () => {
//   await db.sync();
// })();

// app.use(
//   session({
//     secret: "asdasdsadasdas",
//     resave: false,
//     saveUninitialize: true,
//     store: store,
//     cookie: {
//       secure: "auto",
//     },
//   })
// );

app.use(
  cors({
    Credential: true,
    origin: "http://localhost:3000",
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.use("/nist", verifyUser, data);

app.use("/stack", verifyUser, stack);

app.use("/tweet", verifyUser, tweet);

app.use("/user", user);

// app.use("/auth", authRoute);

// store.sync();

app.listen(5000, () => {
  console.log("app running on port 5000");
});
