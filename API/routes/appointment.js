const express = require("express");
const App = require("../modules/appointmentModule");
const Router = new express.Router();

//create appoinetment
Router.post("/create/appointment", async (req, res) => {
  const { userId, employeeId, productId, app_time } = req.body;

  // Create a new appointment instance
  const newAppointment = new Appointment({
    userId,
    employeeId,
    productId,
    app_time,
  });

  try {
    // Save the appointment to the database
    const savedAppointment = await newAppointment.save();
    res.status(201).json(savedAppointment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//get single appointment

Router.get("/fetch/appointment/:id", async (req, res) => {
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
