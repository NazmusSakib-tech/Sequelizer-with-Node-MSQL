const db = require("../models");

// create main Model
const User = db.user;

// main work

//1. create user
const addUser = async (req, res) => {
  let userInfo = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };
  const newUser = await User.create(userInfo);
  res.status(200).json(newUser);
};

module.exports = {
  addUser,
};
