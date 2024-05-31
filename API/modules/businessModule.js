const mongoose = require("mongoose");
const { Schema } = mongoose;

const businessSchema = new Schema({
  bus_name: {
    type: String,
    required: true,
  },
});

const Business = mongoose.model("Business", businessSchema);
module.exports = Business;
