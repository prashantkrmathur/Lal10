const express = require("express");

const app = express();

const userController = require("./controller/userController")

app.use(express.json());

app.use("/api", userController )

module.exports = app;

