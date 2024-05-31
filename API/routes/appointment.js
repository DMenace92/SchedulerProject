const express = require("express");
const App = require("../modules/appointmentModule");
const Router = new express.Router();

//create appoinetment
Router.post("/create/appointment", async (req, res) => {
  try {
    res.status(200).send();
  } catch (e) {
    res.status(400).send();
  }
});

//get single appointment

Router.get("/fetch/appointment", async (req, res) => {
  try {
    res.status(200).send();
  } catch (e) {
    res.status(400).send(e);
  }
});
//update appointment
Router.patch("/update/appointment", async (req, res) => {
  try {
    res.status(200).send();
  } catch (e) {
    res.status(400).send(e);
  }
});
//delete appointment
Router.delete("/delete/appointment", async (req, res) => {
  try {
    res.status(200).send();
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = Router;
