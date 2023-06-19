const {trycatchErr} = require("../utils/utils.js")

///exportamos cada una de las respuestas que declaramos para cada ruta
/// las envolvemos en el trycatchErr para manejar cualquier error y que no se nos caiga el servidor
module.exports = {
     getInfo : trycatchErr(require("./info.js")),
     getInfoID : trycatchErr(require("./infoID.js"))
}