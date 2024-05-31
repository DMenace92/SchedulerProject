const mongoose = require("mongoose");
const { Schema } = mongoose;

const paymentSchema = new Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
  },
  accountnum: {
    type: String,
    required: true,
  },
  holdername: {
    type: String,
    required: true,
  },
  csv: {
    type: String,
    required: true,
  },
  expiry: {
    type: String,
    required: true,
  },
});
const Payment = mongoose.model("Payment", paymentSchema);
module.exports = Payment;
