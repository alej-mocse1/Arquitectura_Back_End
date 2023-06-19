const {trycatchErr} = require("../utils/utils.js")

module.exports = {
    GetPersonajes : trycatchErr(require("./GETpersonajes"),)
}