const argon2 = require("argon2");
const User = require("../models/user.model");

// const login = async (req, res) => {
//   const user = await User.findOne({
//     where: {
//       email: req.body.email,
//     },
//   });

//   if (!user) return res.status(404).json({ msg: "user tidak ditemukan" });
//   const match = await argon2.verify(user.password, req.body.password);
//   if (!match) return res.status(404).json({ msg: "password salah!" });
//   req.session.userId = user.uuid;
//   const uuid = user.uuid;
//   const name = user.name;
//   const email = user.email;
//   const role = user.role;
//   res.status(200).json({ uuid, name, email, role });
// };

const Me = async (req, res) => {
  if (!req.session.userId) {
    return res.status(401).json({ msg: "silahkan login ke akun anda" });
  }
  const user = await User.findOne({
    attributes: ["uuid", "name", "email", "role"],
    where: {
      uuid: req.session.userId,
    },
  });
  if (!user) return res.status(404).json({ msg: "user tidak ditemukan" });
  res.status(200).json(user);
};

module.exports = { Me };
