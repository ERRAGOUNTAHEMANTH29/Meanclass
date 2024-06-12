const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

// create data
router.route("/register").post(userController.createUserDetails);
// get all user
router.route("/get/all/user").get(userController.getUserAll);
// get by id
router.route("/get/user/:id").get(userController.getSpecificUser);
// delete api
router.route("/delete/:id").delete(userController.deleteUser);
// update api
router.route("/update/user/:id").put(userController.updateUserDetails);

// 
router.route('/get/wishlist/products/:id').get(userController.getWishlistData)
module.exports = router;
