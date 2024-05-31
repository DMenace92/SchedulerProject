const express = require("express");
const Router = new express.Router();

Router.post("/create/payment", async (req, res) => {
  try {
    res.status(200).send();
  } catch (e) {
    res.status(400).send(e);
  }
});

Router.get("/fetch/payment", async (req, res) => {
  try {
    res.status(200).send();
  } catch (e) {
    res.status(400).send(e);
  }
});

Router.patch("/update/payment", async (req, res) => {
  try {
    res.status(200).send();
  } catch (e) {
    res.status(400).send(e);
  }
});

Router.delete("/delete/payment", async (req, res) => {
  try {
    res.status(200).send();
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = Router;
