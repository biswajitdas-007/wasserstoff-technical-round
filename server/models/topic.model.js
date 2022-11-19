const mongoose = require("mongoose");

const topicSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      require: true,
    },
    topic: { type: String, required: true },
    content: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

const Topic = mongoose.model("topic", topicSchema);

module.exports = Topic;
