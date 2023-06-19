const express = require("express");
const morgan =require("morgan");


const Server = express();

Server.use(morgan("dev"));
Server.use(express.json());


Server.use(require("./routes/routes"))


Server.use((error, req, res, next) => {
 
    res.status(error.status || 500).json({
       error: {
          message: error.message
       }
    });
 });

module.exports = Server;

