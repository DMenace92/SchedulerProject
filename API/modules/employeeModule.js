const mongoose = require("mongoose");
const { Schema } = mongoose;

const employeeSchema = new Schema(
  {
    employeeNum: {
      type: String,
      required: true,
    },
    businessID: {
      type: mongoose.Schema.ObjectId,
    },
    emp_firstname: {
      type: String,
      required: true,
    },
    emp_lastname: {
      type: String,
      required: true,
    },
    years_emp: {
      type: String,
      default: Date,
    },
    emp_active: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamp: Date,
  }
);

const Employee = mongoose.model("Employee", employeeSchema);
module.exports = Employee;
