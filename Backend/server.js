const app = require("./src/index");

const connection = require("./src/config/db");

app.listen(2244, async () => {
    await connection();
    console.log("Listening to the port number 2244")
})