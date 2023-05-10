const mongoose = require("mongoose");
require("dotenv").config();

const db = mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => console.log(err.message));

module.exports = db;
