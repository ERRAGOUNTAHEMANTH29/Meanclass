const userService = require("../services/userService");

const createUserDetails = async (req, res) => {
  console.log(req.body);
  const userData = await userService.createUserDetails(req.body);
  res.send(userData);
};
const getUserAll = async (req, res) => {
  const user = await userService.getUsers();
  res.send(user);
};
module.exports = {
  createUserDetails,
  getUserAll,
};
