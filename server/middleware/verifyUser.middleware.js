const User = require("../models/user.model");
const bcrypt = require("bcrypt");

const validateUserSignUp = async (req, res, next) => {
  try {
    var { username, email, password } = req.body;
    const existingUser = await User.findOne({ username }, { email });
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validemail = emailRegex.test(email);

    if (existingUser) {
      return res.status(400).send({ msg: "username or email already in used" });
    }

    if (username.trim() == "" || email.trim() == "" || password.trim() == "") {
      return res.send({ msg: "please fill in the requirments field" });
    }

    if (!validemail) {
      return res.send({ msg: "email not accepted" });
    }

    if (password.length < 3 && password.length >= 10) {
      return res.send({ msg: "password at least 8 character" });
    }

    // if (confpassword !== password) {
    //   return res.send({ msg: "password not same!" });
    // }
    next();
  } catch (err) {
    console.log("err:", err);
    res.status(500).send({ msg: "we down guys :d" });
  }
};

const validateUserSignIn = async (req, res, next) => {
  try {
    var { username, email, password } = req.body;
    const user = await User.findOne({ $or: [{ username }, { email }] });

    if (username == "" || email == "" || password == "") {
      res.send({ msg: "Please fill the requirement fields!" });
    }

    if (!user) {
      return res.status(404).send({ msg: "User not found!" });
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(400).send({ msg: "invailid Password" });
    }

    next();
  } catch (err) {
    res.status(500).send({ msg: "we down guys :d" });
  }
};

const validateUserRoles = (role) => {
  return (req, res, next) => {
    if (req.user && req.user.role === role) {
      next();
    } else {
      res.status(403).send("unauthorize");
    }
  };
};

module.exports = { validateUserSignUp, validateUserSignIn, validateUserRoles };
