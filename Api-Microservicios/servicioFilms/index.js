const server = require("./src/server.js");

const PORT = 8003

server.listen(PORT,() => {
    console.log("servidor escuchando en " + PORT)
})