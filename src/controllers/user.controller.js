import User from "../models/User.js"


export const createUser = async (req, res) => {
  res.json("creating users");
};


export const getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};
