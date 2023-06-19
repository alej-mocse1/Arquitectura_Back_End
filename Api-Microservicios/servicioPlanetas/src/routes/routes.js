const {Router} = require("express");
const controller = require("../controller/controller")


const routes = Router();

routes.get("/planetas", controller.getPlanetas)


module.exports = routes