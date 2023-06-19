const store  = require("../database/index")


///requerimos el objeto que contiene cada uno de los schemas de la db
///y ya que a todos estos scheemas les denimos el mismo metodo podemos manejar 
///cada una de las respuestas con una sola ruta 
module.exports = async (req,res) => {
        
    const  model  = req.params
     console.log(model)
     const response = await store[model.servicio].get(model.id)
     res.status(200).json(response)

}