const {Router} = require("express");
const Controller = require("../controller/controller")

const routes = Router();


routes.get("/:servicio" , Controller.getInfo)

routes.get("/:servicio/:id" , Controller.getInfoID)


 module.exports = routes