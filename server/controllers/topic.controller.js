const express = require("express");
const router = express.Router();

const Topic = require("../models/topic.model");

router.get("/topic/:id", async (req, res) => {
  try {
    console.log(req.params);
    const topic = await Topic.find({ user: req.params.id }).exec();
    console.log("Topic: ", topic);
    return res.status(200).send(topic);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

router.post("/topic", async (req, res) => {
  try {
    const userDomain = await Topic.create(req.body);
    return res.status(201).send(userDomain);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

module.exports = router;
