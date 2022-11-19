const mongoose = require("mongoose");

const blockSchema = new mongoose.Schema(
  {
    topic: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "topic",
      require: true,
    },
    block: { type: String, required: true },
    category: { type: String, required: false },
  },
  {
    versionKey: false,
  }
);

const Block = mongoose.model("block", blockSchema);

module.exports = Block;
