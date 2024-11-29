const User = require("../models/userModel");

const register = async (req, res) => {
  try {
    const user = await User.register(req.body);
    res.status(200).json({ message: "User created" });
  } catch (error) {
    error_message = error.message;
    res.status(400).json({ message: "Error logging in", error: error_message });
  }
};

const login = async (req, res) => {
  try {
    const jwt = await User.login(req.body);
    res.status(200).json({ message: "Autenticated", data: jwt });
  } catch (error) {
    error_message = error.message;
    res
      .status(401)
      .json({ message: "Error creating user", error: error_message });
  }
};

module.exports = { register, login };
