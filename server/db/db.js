const mongoose = require("mongoose");
const connect = () => {
  return mongoose.connect(
    `mongodb+srv://biswajit:das@cluster0.t29w0az.mongodb.net/?retryWrites=true&w=majority`
  );
};

module.exports = connect;
