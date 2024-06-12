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
const getSpecificUser = async (req, res) => {
  const getUserDetails = await userService.getSpecificUser(req.params.id);
  res.send(getUserDetails);
};
const deleteUser = async (req, res) => {
  const deleteDetails = await userService.deleteUser(req.params.id);
  res.send(deleteDetails);
};
// update
const updateUserDetails = async (req, res) => {
  const userUpdate = await userService.updateUser(req.params.id,req.body);
  res.send(userUpdate);
};

// get wishlist data
const getWishlistData = async (req, res) => {
  const wishlist = await userService.getWishlistData(req.params.id)
  res.send(wishlist);
}
module.exports = {
  createUserDetails,
  getUserAll,
  getSpecificUser,
  deleteUser,
  updateUserDetails,
  getWishlistData,
};
