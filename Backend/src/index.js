const express = require("express");

const app = express();

const userRoute = require("./routes/userRoute")

app.use(express.json());

app.use("/api", userRoute )

module.exports = app;

