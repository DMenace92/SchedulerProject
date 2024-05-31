const mongoose = require("mongoose");
const config = require("../config/config");
// const MONGODB_URI = config;

let newConfig = config;

// mongoose.connect(newConfig, {
//     useNewUrlParser: true,
//     // useCreateIndex: true,
//     // useFindAndModify: false,
//     useUnifiedTopology: true,

// })
// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
mongoose.connect(newConfig);

mongoose.connection.on("connected", () => {
  console.log("connected to mongodb");
});
mongoose.connection.on("error", (err) => {
  console.log(err);
});

module.exports = newConfig;
