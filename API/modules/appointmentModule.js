const mongoose = require("mongoose");
const { Schema } = mongoose;

const appointmentSchema = new Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
  },
  employeeid: {
    type: mongoose.Schema.ObjectId,
  },
  productId: {
    type: mongoose.Schema.ObjectId,
  },
  app_time: {
    type: Date,
  },
});
const Appointment = mongoose.model("Appointment", appointmentSchema);
module.exports = Appointment;
