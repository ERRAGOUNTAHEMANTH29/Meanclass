const userModel = require("../models/registerModel");

const createUserDetails = async (body) => {
  const createData = await userModel.create(body);
  return createData;
};

const getUsers = async () => {
  const usersDetails = await userModel.find({});
  return usersDetails;
};

module.exports = {
  createUserDetails,
  getUsers,
};
