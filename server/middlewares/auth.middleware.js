const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyUser = (req, res, next) => {
  try {
    const token = req.headers.token;
    console.log(token);
    const valid = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.session = { role: valid.role };
    next();
  } catch (error) {
    res.status(500).json({ msg: "internal server ga sehat" });
  }
};

module.exports = verifyUser;
