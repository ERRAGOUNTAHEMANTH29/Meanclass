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
    {
      $match: {
        $and: [{ active: { $eq: true } }, { _id: { $ne: id } }],
      },
    },
    // {
    //   $match: {
    //     $or: [{ active: { $eq: true } }, { _id: { $eq: id } }],
    //   },
    // },
  ]);
  return userDetails;

  // const userDetails = await userModel.aggregate([
  //   // {
  //   //   $match: {
  //   //     _id: id,
  //   //   },
  //   // },
  //   // {
  //   //   $match: {
  //   //     $and: [{ _id: { $eq: id } }, { name: { $eq: "Alice" } }],
  //   //   },
  //   // },
  //   {
  //     $match: {
  //       $or: [{ _id: { $eq: id } }, { name: { $eq: "Alice" } }],
  //     },
  //   },
  // ]);
  // return userDetails;
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

// update
const updateUser = async (id, body) => {
  const checkUserId = await registerModel.findById({ _id: id });

  if (!checkUserId) {
    console.log("user not found");
  }
  const updateData = await registerModel.findByIdAndUpdate({ _id: id }, body, {
    new: true,
  });

  return updateData;
};

//
const getWishlistData = async (id) => {
  const wishlistDetails = await registerModel.aggregate([
    {
      $match: {
        _id: id,
      },
    },
    {
      $lookup: {
        from: "wishlists",
        localField: "_id",
        foreignField: "userId",
        as: "wishlistData",
      },
    },
    {
      $lookup: {
        from: "products",
        localField: "wishlistData.productId",
        foreignField: "_id",
        as: "productData",
      },
    },
    // { $unwind:"$productData"},
    {
      $project:{
        name:1,
        _id: 0,
        mobile:1,
        email:1,
        productData:1
        // product_name: "$productData.productName",
        // product_price:"$productData.price",
        // qty:"$productData.qty"

      }
    }
  ]);
  return wishlistDetails;
};
module.exports = {
  createUserDetails,
  getUsers,
  getSpecificUser,
  deleteUser,
  updateUser,
  getWishlistData,
};
