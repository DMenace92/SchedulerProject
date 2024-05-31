const express = require("express");
const Employee = require("../modules/employeeModule");
const Router = new express.Router();

Router.post("/create/employee", async (req, res) => {
  const employee = new Employee(req.body);
  try {
    await employee.save();
    res.status(200).send({ employee });
  } catch (e) {
    res.status(400).send(e);
  }
});

Router.get("/fetch/employee", async (req, res) => {
  try {
    res.status(200).send();
  } catch (e) {
    res.status(400).send(e);
  }
});

Router.patch("/update/employee", async (req, res) => {
  try {
    res.status(200).send();
  } catch (e) {
    res.status(400).send(e);
  }
});

Router.delete("/delete/employee", async (req, res) => {
  try {
    res.status(200).send();
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = Router;
