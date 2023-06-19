const {trycatchErr} = require("../utils/utils.js")

module.exports = {
     getPlanetas : trycatchErr(require("./GETplaneta"))
}