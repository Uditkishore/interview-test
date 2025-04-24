const User = require("../model/user.model");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

let privateKey = "Andgate";

const register = async (req, res) => {
  const body = req.body;
  try {
    let newPassword = await bcrypt.hash(body.password, 10);

    let temp = {
      name: body.name,
      password: newPassword,
      email: body.email,
      phone: body.phone,
      age: body.age,
    };

    await User.create(temp);

    return res
      .status(200)
      .send({ status: true, message: "User registered successfully" });
  } catch (error) {
    console.log("register error", error.message);
    return res
      .status(500)
      .send({ status: false, message: "Somthing went wrong." });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });

    if (!user) {
      return res
        .status(400)
        .send({ status: false, message: "Invalid email or password." });
    }

    let isPasswordValid = await bcrypt.compare(password, user.password);

    if (isPasswordValid) {
      var token = jwt.sign({ id: user._id }, privateKey, { expiresIn: "1h" });
      return res
        .status(200)
        .send({ status: true, token: token, message: "Loggedin Successfully" });
    } else {
      return res
        .status(400)
        .send({ status: false, message: "Invalid email or password." });
    }
  } catch (error) {
    console.log("register error", error.message);
    return res
      .status(500)
      .send({ status: false, message: "Somthing went wrong." });
  }
};

const getUserDetail = async (req, res) => {
  let { id } = req.params;
  try {
    let user = await User.findOne({ _id: id });
    return res.status(200).send({ status: true, data: user });
  } catch (error) {
    console.log("register error", error.message);
    return res
      .status(500)
      .send({ status: false, message: "Somthing went wrong." });
  }
};

module.exports = {
  register,
  login,
  getUserDetail,
};
