const express = require("express");
const Router = express.Router();
const appointmentRouter = require("./appointment");
const businessRouter = require("./business");
const employeeRouter = require("./employee");
const productRouter = require("./products");
const paymentRouter = require("./payment");
const historyRouter = require("./history");
const userRouter = require("./user");

Router.use(appointmentRouter);
Router.use(businessRouter);
Router.use(employeeRouter);
Router.use(productRouter);
Router.use(paymentRouter);
Router.use(historyRouter);
Router.use(userRouter);
// Router.use("/appointments", appointmentRouter);
// Router.use("/business", businessRouter);
// Router.use("/employees", employeeRouter);
// Router.use("/products", productRouter);
// Router.use("/payments", paymentRouter);
// Router.use("/users", userRouter);

module.exports = Router;
