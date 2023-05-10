require("dotenv").config();
const jwt = require("jsonwebtoken");
const { TokenExpiredError, JsonWebTokenError } = require("jsonwebtoken");

const verifySignIn = (req, res, next) => {
  try {
    const token = req.headers.token;

    // decrypt token
    const validToken = jwt.verify(token, process.env.JWT_SECRET);

    if (!validToken) {
      return res.status(401).send({ msg: "token is not valid" });
    }
    next();
  } catch (err) {
    if (err instanceof JsonWebTokenError) {
      return res
        .status(401)
        .send({ msg: "Unauthorized access Please Sign In!" });
    }

    if (err instanceof TokenExpiredError) {
      return res
        .status(401)
        .send({ msg: "Token Expired Please Sign In Again!" });
    }

    console.log(err);
    res.status(500).send({ msg: "Failed to verify token" });
  }
};

module.exports = verifySignIn;
