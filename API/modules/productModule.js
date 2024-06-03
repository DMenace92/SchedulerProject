const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  item: {
    type: { String },
  },
  note: {
    type: String,
  },
});
const Product = mongoose.model("Product", productSchema);
module.exports = Product;
