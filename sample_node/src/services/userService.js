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
  // const userDetails = await userModel.findById({ _id: id });
  // return userDetails;

  const userDetails = await userModel.aggregate([
    // {
    //   $match: {
    //     _id: id,
    //   },
    // },
    // {
    //   $match: {
    //     $and: [{ _id: { $eq: id } }, { name: { $eq: "Alice" } }],
    //   },
    // },
    {
      $match: {
        $or: [{ _id: { $eq: id } }, { name: { $eq: "Alice" } }],
      },
    },
  ]);
  return userDetails;
};
module.exports = {
  createUserDetails,
  getUsers,
  getSpecificUser,
};
