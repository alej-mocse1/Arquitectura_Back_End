const axios = require('axios');

module.exports = async(req,res) => {

        const info = await axios.get("http://database:8007/Personaje")         
        res.status(200).json(info.data) 
}