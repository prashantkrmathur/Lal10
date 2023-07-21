const express = require("express");
const bcrypt = require("bcrypt");

const router = express.Router();

const User = require("../models/userModel");

router.post("/newuser", async (req, res) => {

    const hashedPassword = async () => {
        const plainTextPassword = req.body.password
        const saltRounds = 10;
        try {
            const password = await bcrypt.hash(plainTextPassword, saltRounds);
            return password
        } catch (error) {
            return error.meassage
        }
    }

    try {
        const password = await hashedPassword()
        const user = await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            userName: req.body.userName,
            email: req.body.email,
            password : password
        });
        return res.status(200).send({ user });
    } catch (error) {
        console.log("error", error)
    }
})

router.get("/user", async (req, res) => {
    try {
        const user = await User.find().lean().exec();
        return res.status(200).send({ user });
    } catch (error) {

    }
})
module.exports = router;

