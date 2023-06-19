const server = require("./src/server.js");


const PORT = 8007;

server.listen(PORT,() => {
    console.log("servidor escuchando en el puerto " + PORT);
})