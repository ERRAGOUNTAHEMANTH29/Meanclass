const express = require("express");
const router = express.Router();
const productController = require("../controller/productController");
const wishlistController = require("../controller/wishlistController");
router.route("/add/product").post(productController.createProductData);
// add wishlist
router.route("/add/wishlist").post(wishlistController.addWishlist);
module.exports = router;
