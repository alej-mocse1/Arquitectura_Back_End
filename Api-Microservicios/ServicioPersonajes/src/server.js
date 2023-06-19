const express = require("express");
const Morgan = require("morgan");


const server = express();


server.use(Morgan("dev"));
server.use(express.json());


server.use(require("./routes/routes"))


server.use((error, req, res, next) => {
 
    res.status(error.status || 500).json({
       error: {
          message: error.message
       }
    });
 });

module.exports = server