const express = require("express");
const router = express.Router();

const User = require("../models/user.model");

router.post("/username", async (req, res) => {
  try {
    const userDomain = await User.create(req.body);
    return res.status(201).send(userDomain);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

module.exports = router;
