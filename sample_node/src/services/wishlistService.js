const wishlistModel = require("../models/wishlistModel");

const addWishlist = async (data) => {
  const createData = await wishlistModel.create(data);
  return createData;
};
module.exports = {
  addWishlist,
};
