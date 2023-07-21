const mongoose = require("mongoose");
require("dotenv").config()

console.log("link", process.env.MONGODB_URL)

const connection = async () => {
    await mongoose.connect(process.env.MONGODB_URL)
}

module.exports = connection