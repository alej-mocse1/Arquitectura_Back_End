const { Router } = require("express");
const controller = require("../controllers/Controller")


const routes = Router();



routes.get("/personajes", controller.GetPersonajes )



module.exports = routes