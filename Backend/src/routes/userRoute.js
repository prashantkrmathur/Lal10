const express = require("express");
const router = express.Router();
const { registerController } = require("../controller/userController");
const { loginController } = require("../controller/userController")

router.post("/newuser", registerController);
router.get("/user", loginController);

module.exports = router;