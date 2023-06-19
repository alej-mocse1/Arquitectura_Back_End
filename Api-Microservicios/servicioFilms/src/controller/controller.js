const {trycatchErr} = require("../utils/utils.js")

module.exports = {

    getFilms : trycatchErr(require("./getFilms.js")) 

}