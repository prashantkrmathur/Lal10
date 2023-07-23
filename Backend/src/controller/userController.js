
const User = require("../models/userModel");
const { hashedPassword } = require("../helpers/authHelper");
const { comparePassword } = require("../helpers/authHelper")
const JWT = require("jsonwebtoken");

const registerController =  async (req, res) => {
    try {
        const { firstName, lastName, email, userName, password } = req.body;
        if (!(firstName && email && password && lastName && userName)) {
            return res.send({ message: "All field is required please fill" });
        }
        const existinguser = await User.findOne({ email: email });
        if (existinguser) {
            return res.status(200).send({
                success: false,
                message: "Already registered user",
            });
        }
        const hashpassword = await hashedPassword(password)
        const user = await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            userName: req.body.userName,
            email: req.body.email,
            password: hashpassword
        });
        return res.status(200).send({
            success: true,
            message: "user registerd Successfully",
            user, });
    } catch (error) {
        console.log("error", error)
        res.status(500).send({
            success: false,
            message: "Error in Registration",
            err: error.message,
        });
    }
}

const loginController = async (req,res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(404).send({
                success: false,
                message: "Invalid email or Password",
            });
        }
        //check user
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).send({
                success: true,
                message: "Email is not registered",
            });
        }
        const match = await comparePassword(password, user.password);
        if (!match) {
            return res.status(404).send({
                success: true,
                message: "Invalid Password",
            });
        }

        //token
        const token = JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });
        res.status(200).send({
            success: true,
            message: "login Successfully",
            user: {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                userName: user.userName
            },
            token,
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "error in login",
            error,
        });
    }
}

module.exports = {
    registerController,
    loginController
};

