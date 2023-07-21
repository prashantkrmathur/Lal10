const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    userName: { type: String, require: true },
    email: { type: String, require: true }
}, {
    timestamps: true,
    versionKey: false
})


module.exports = new mongoose.model("user", userSchema);