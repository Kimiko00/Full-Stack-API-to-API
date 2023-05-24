const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

// @desc      User Register
// @Route     POST /user/register
// @Access    Public
const createUser = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    const hashedPassword = bcrypt.hashSync(password, 8);

    const user = await User({
      username,
      email,
      password: hashedPassword,
      role: role || "user",
    });
    await user.save();
    res.status(200).send({ msg: "data added" });
  } catch (err) {
    console.log("err:", err);
    res.status(404).send({ msg: "failed to create user" });
  }
};

// @desc      User Sign In
// @Route     POST /user/sign-in
// @Access    Public
const userSignIn = async (req, res) => {
  try {
    var { username, email } = req.body;
    let secretKey = process.env.JWT_SECRET;

    const user = await User.findOne({ $or: [{ username }, { email }] });

    const data = {
      time: Date(),
      userId: user._id,
    };

    const generateToken = jwt.sign(data, secretKey, { expiresIn: "86400s" });

    res.status(200).send({
      username: user.username,
      email: user.email,
      password: user.password,
      token: generateToken,
    });
  } catch (error) {
    console.log(error);
    res.status(404).send({ msg: "failed to Sign You Up" });
  }
};

// @desc      User Profile
// @Route     POST /user/profile
// @Access    Private
const getDataUser = async (req, res) => {
  const token = req.headers.token;
  const decryptToken = jwt.verify(token, process.env.JWT_SECRET);

  const user = await User.findById(decryptToken.userId);

  return res.status(200).send({
    username: user.username,
    email: user.email,
    password: user.password,
  });
};

// @desc      All User Profile
// @Route     POST /user/user-list
// @Access    Private
// @Role      admin
const getAllDataUser = async (req, res) => {
  const token = req.headers.token;
  await jwt.verify(token, process.env.JWT_SECRET);

  const users = await User.find();

  const data = users.map((user) => ({
    username: user.username,
    email: user.email,
    password: user.password,
    role: user.role,
    create: user.createdAt,
    update: user.updatedAt,
  }));

  return res.status(200).send(data);
};

module.exports = { createUser, userSignIn, getDataUser, getAllDataUser };
