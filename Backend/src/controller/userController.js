const express = require("express");

const router = express.Router();

const User = require("../models/userModel");

router.post("/newuser", async (req, res) => {
    try {
        const user = await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            userName: req.body.userName,
            email: req.body.email
        });
        return res.status(200).send({ user });
    } catch (error) {
        console.log("error", error)
    }
})

module.exports = router;

