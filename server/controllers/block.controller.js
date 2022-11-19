const express = require("express");
const router = express.Router();

const Block = require("../models/block.model");

router.post("/block", async (req, res) => {
  try {
    const block = await Block.create(req.body);
    return res.status(201).send(block);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

router.patch("/block/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    //let text = ;
    console.log(req.body);

    const block = await Block.findByIdAndUpdate(req.params.id, req.body).exec();
    console.log(block);

    return res.send(block);
  } catch (err) {
    console.log(err);
    return res.status(500).send({ mess: "some thing went wrong" });
  }
});

module.exports = router;
