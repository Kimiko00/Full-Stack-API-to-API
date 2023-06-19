const cors = require("cors");
const express = require("express");
const User = require("./routes/user.routes");
const apiData = require("./routes/apiData.routes");
const mandiant = require("./routes/news.routes");
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

app.use("/data", apiData);

app.use("/news", mandiant);

app.use("/user", User);

app.listen(5000, () => {
  console.log("app running on port 5000");
});
