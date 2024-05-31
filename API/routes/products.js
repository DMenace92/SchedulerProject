const express = require("express");
const Product = require("../modules/appointmentModule");
const Router = new express.Router();

//create appoinetment
Router.post("/create/product", async (req, res) => {
  try {
    res.status(200).send();
  } catch (e) {
    res.status(400).send();
  }
});

//get single appointment

Router.get("/fetch/product", async (req, res) => {
  try {
    res.status(200).send();
  } catch (e) {
    res.status(400).send(e);
  }
});
//update appointment
Router.patch("/update/product", async (req, res) => {
  try {
    res.status(200).send();
  } catch (e) {
    res.status(400).send(e);
  }
});
//delete appointment
Router.delete("/delete/product", async (req, res) => {
  try {
    res.status(200).send();
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = Router;
