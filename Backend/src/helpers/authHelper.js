const bcrypt = require("bcrypt");

 const hashedPassword = async (plainTextPassword) => {
    try {
        const saltRounds = 10;
        const password = await bcrypt.hash(plainTextPassword, saltRounds);
        return password
    } catch (error) {
        return error.meassage
    }
}
 const comparePassword = async (password, hashedPassword) => {
    return bcrypt.compare(password, hashedPassword);
};

module.exports = {
    hashedPassword,
    comparePassword
}