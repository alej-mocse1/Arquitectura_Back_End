const { Schema } = require("mongoose");


const ScheemaPlanetas = new Schema({
    _id: String,
    name: String,
    rotation_period: String,
    orbital_period: String,
    diameter: String,
    climate: String,
    gravity: String,
    terrain: String,
    surface_water: String,
    residents: [{type:String , ref:"Personaje"}],
    films: [{type:String , ref:"Film"}]
  });

  ScheemaPlanetas.statics.list = async function(){
    return await this.find()
    .populate("residents", ["_id", "name"])
    .populate("films" , ["_id", "title"])
  }

  ScheemaPlanetas.statics.get = async function(id){
    return await this.findById(id)
    .populate("residents", ["_id", "name"])
    .populate("films" , ["_id", "title"])
  }

  ScheemaPlanetas.statics.CreatePlaneta = async function(personaje){
    return await this.create(personaje)
  }


  module.exports = ScheemaPlanetas