const { Schema } = require("mongoose");


const Scheemafilms = new Schema({
    _id:String,
    title: String,
    opening_crawl: String ,
    director: String,
    producer: String,
    release_date:String,
    characters: [{type: String , ref: "Personaje"}],
    planets: [{type:String , ref:"Planeta"}]
  });

  Scheemafilms.statics.list = async function(){
    return await this.find()
    .populate("characters", ["_id", "name"])
    .populate("planets" , ["_id", "name"])
  }

  Scheemafilms.statics.get = async function(id){
    return await this.findById(id)
    .populate("characters", ["_id", "name"])
    .populate("planets" , ["_id", "name"])
  }

  Scheemafilms.statics.CreateFilm= async function(personaje){
    return await this.create(personaje)
  }


  module.exports = Scheemafilms