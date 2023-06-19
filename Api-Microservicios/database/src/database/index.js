const mongoose = require("mongoose");

const conn = mongoose.createConnection("mongodb+srv://admin:admin@cluster0.lshc74j.mongodb.net/microserviciosApi");



module.exports = {
  Planeta : conn.model("Planeta", require("./Scheema/planetas.js")),
  Film : conn.model("Film", require("./Scheema/films.js")),
  Personaje : conn.model("Personaje", require("./Scheema/personajes.js")),
}

