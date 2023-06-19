const { Schema } = require("mongoose");


const ScheemaPersonajes = new Schema({
  _id:String,
  name: String,
  height:String,
  mass: String,
  hair_color: String,
  skin_color:String,
  eye_color: String,
  birth_year: String,
  gender: String,
  homeworld: {type:String , ref:"Planeta"} ,
  films: [{type:String , ref:"Film"}]
  });

  ScheemaPersonajes.statics.list = async function(){
    return await this.find()
    .populate("homeworld", ["_id" , "name"])
    .populate("films" , ["_id" , "title"])
  }

  ScheemaPersonajes.statics.get = async function(id){
    return await this.findById(id)
    .populate("homeworld", ["_id" , "name"])
    .populate("films" , ["_id" , "title"])
  }

  ScheemaPersonajes.statics.CreatePersonaje = async function(personaje){
    return await this.create(personaje)
  }



  module.exports = ScheemaPersonajes