const productModel = require("../models/productModel");

const createProduct = async (body) => {
  const createdDate = new Date();
  const productData = {
    createdDate: createdDate,
  };
  const product = await productModel.create({ ...productData, ...body });
  return product;
};

const getAllProducts = async (page) => {
  const allProducts = await productModel.aggregate([
    { $skip: page * 5 },
    { $limit: 5 },
  ]);
  return allProducts;
};
module.exports = {
  createProduct,
  getAllProducts,
};
