const express = require("express");
const data = require("./api/nist.api");

app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.use("/nist", data);

app.listen(5000, () => {
  console.log("app running on port 5000");
});
