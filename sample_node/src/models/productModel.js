const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const productSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuidv4,
  },
  productName: {
    type: String,
  },
  price: {
    type: Number,
  },
  active: {
    type: Boolean,
    default: true,
  },
  qty: {
    type: Number,
  },
  // createdDate: {
  //   type: String,
  //   default: moment()
  // }
});

const productModel = mongoose.model("product", productSchema);
module.exports = productModel;
