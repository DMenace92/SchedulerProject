const mongoose = require("mongoose");
const { Schema } = mongoose;
{
  /*this is the schema that will store the appointment history it will containe
 the employee, 
 the user 
the product and */
}
const historySchema = new Schema({});
const History = mongoose.model("History", historySchema);
module.exports = History;
