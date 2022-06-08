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

//2. update user
const updateUser = async (req, res) => {
  let userInfo = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };
  const updatedUser = await User.update(userInfo, {
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json(updatedUser);
};

//3. find all users
const findAllUsers = async (req, res) => {
  const allUsers = await User.findAll();
  res.status(200).json(allUsers);
};

//4 Delete user
const deleteUser = async (req, res) => {
  const deletedUser = await User.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json(deletedUser);
};

//4. Delete all users
const deleteAllUsers = async (req, res) => {
  const deletedAllUsers = await User.destroy({
    where: {},
  });
  res.status(200).json(deletedAllUsers);
};

module.exports = {
  addUser,
  updateUser,
  findAllUsers,
  deleteUser,
  deleteAllUsers,
};
