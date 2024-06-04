const express = require("express");
const Business = require("../modules/businessModule");
const Router = new express.Router();

//create appoinetment
Router.post("/create/business", async (req, res) => {
  const business = new Business(req.body);
  try {
    await business.save();
    res.status(200).send({ business });
  } catch (e) {
    res.status(400).send();
  }
});

//get single appointment

Router.get("/fetch/business", async (req, res) => {
  try {
    res.status(200).send();
  } catch (e) {
    res.status(400).send(e);
  }
});
//update appointment
Router.patch("/update/business", async (req, res) => {
  try {
    res.status(200).send();
  } catch (e) {
    res.status(400).send(e);
  }
});
//delete appointment
Router.delete("/delete/business", async (req, res) => {
  try {
    res.status(200).send();
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = Router;
