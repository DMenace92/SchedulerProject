const express = require("express");
const User = require("../modules/userModule");
const Router = new express.Router();

Router.post("/user/register", async (req, res) => {
  const user = new User(req.body);
  console.log(user, " user side");

  try {
    await user.save();
    const token = user.generateAuthToken();
    res.status(200).send({ user, token });
  } catch (e) {
    res.status(400).send(e);
  }
});

Router.post("/user/login", async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.username,
      req.body.password
    );
    console.log(user);
    if (!user) {
      return res.status(401).send({ error: "Invalid credentials" });
    }
    const token = await user.generateAuthToken();
    res.status(200).send({ user, token });
  } catch (e) {
    res.status(400).send(e);
  }
});

Router.patch("/user/update/login", async (req, res) => {
  try {
    res.status(200).send();
  } catch (e) {
    res.status(400).send(e);
  }
});

Router.delete("/user/delete", async (req, res) => {
  try {
    res.status(200).send();
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = Router;
