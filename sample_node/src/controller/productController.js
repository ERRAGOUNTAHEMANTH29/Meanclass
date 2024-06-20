const productService = require("../services/productService");
const createProductData = async (req, res) => {
  const product = await productService.createProduct(req.body);
  res.send(product);
};
const getAllProducts = async (req, res) => {
  const allProducts = await productService.getAllProducts(req.params.page);
  res.send(allProducts);
};
module.exports = {
  createProductData,
  getAllProducts,
};
