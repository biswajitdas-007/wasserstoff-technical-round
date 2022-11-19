const express = require("express");

const db = require("./db/db");
const userRouter = require("./controllers/user.controller");
const topicRouter = require("./controllers/topic.controller");
const blockRouter = require("./controllers/block.controller");

const app = express();
app.use(express.json());

app.use("/", userRouter);
app.use("/", topicRouter);
app.use("/", blockRouter);

app.listen(4001, async () => {
  console.log("Backend is running at port 4001");
  await db()
    .then((res) => {
      console.log("Server is connected");
    })
    .catch((err) => console.log("Server is not connected"));
});
