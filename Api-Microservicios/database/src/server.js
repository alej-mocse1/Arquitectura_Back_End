const Express = require("express");
const morgan = require("morgan");


const server = Express();

server.use(morgan("dev"));
server.use(Express.json());



server.use(require("./routes/routes"))



server.use((error, req, res, next) => {
    res.status(error.status || 500).json({
       error: {
          message: error.message
       }
    });
 });



 module.exports = server
