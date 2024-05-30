const userModel = require("../models/registerModel");

const createUserDetails = async (body) => {
  const createData = await userModel.create(body);
  return createData;
};

const getUsers = async () => {
  const usersDetails = await userModel.find({});
  return usersDetails;
};

const getSpecificUser = async (id) => {
  const userDetails = await userModel.findById({ _id: id });
  return userDetails;
  // console.log(id);
};
module.exports = {
  createUserDetails,
  getUsers,
  getSpecificUser,
};
