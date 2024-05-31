const express = require("express");
const app = express();
const cors = require("cors");
const routesRouter = require("./routes/routes");
const bodyParser = require("body-parser");
require("./config/db");

const PORT = process.env.PORT || 9000;
app.use(cors());
app.use(bodyParser.json());
// app.use("/api", routesRouter);
app.use(routesRouter);

app.listen(PORT, (err) => {
  if (err) {
    throw err;
  }
  console.log(`Server running on Port ${PORT}`);
});
