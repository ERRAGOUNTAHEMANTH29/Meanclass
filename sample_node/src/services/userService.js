const registerModel = require("../models/registerModel");
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
const deleteUser = async (id) => {
  const deleteUserDetails = await registerModel.findById({ _id: id });
  if (!deleteUserDetails) {
    console.log("user not found");
  } else {
    const deletedata = await registerModel.findByIdAndDelete({ _id: id });
    console.log(deletedata);
  }
  return deleteUserDetails;
};
module.exports = {
  createUserDetails,
  getUsers,
  getSpecificUser,
  deleteUser,
};
