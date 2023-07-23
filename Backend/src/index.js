const express = require("express");
const app = express();
const cors = require('cors');
const userRoute = require("./routes/userRoute")
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');

    next();
});
app.use("/api", userRoute)

module.exports = app;

