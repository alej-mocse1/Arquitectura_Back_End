const Router = require("express");
const controller = require("../controller/controller")

const Route = Router();


Route.get("/films", controller.getFilms)


module.exports = Route