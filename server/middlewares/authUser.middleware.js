const User = require("../models/user.model");

const verifyUser = async (req, res, next) => {
  if (!req.session.userId) {
    return res.status(401).json({ msg: "silahkan login" });
  }
  const user = await User.findOne({
    where: {
      uuid: req.session.userId,
    },
  });
  if (!user) return res.status(404).json({ msg: "user tidak ada" });
  req.userId = user.id;
  req.role = user.role;
  next();
};

const admin = async (req, res, next) => {
  const user = await User.findOne({
    where: {
      uuid: req.session.userId,
    },
  });
  if (!user) return res.status(404).json({ msg: "user tidak ada" });
  if (user.role !== "admin")
    return res.status(403).json({ msg: "tidak ada autorisasi" });
  next();
};

const user = async (req, res, next) => {
  const user = await User.findOne({
    where: {
      uuid: req.session.userId,
    },
  });
  if (!user) return res.status(404).json({ msg: "user tidak ada" });
  if (user.role !== "user")
    return res.status(403).json({ msg: "tidak ada autorisasi" });
  next();
};

module.exports = { verifyUser, admin, user };
