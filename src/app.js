const express = require("express");
const userRouter = require("./routes/users");

module.exports = () => {
  const app = express();

  app.use(express.json());
  app.use("/users", userRouter);

  return app;
};
