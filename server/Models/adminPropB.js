const { mongoose } = require("mongoose");

const adminPropBSchema =  mongoose.Schema(
    {
        picture:{type: String, required:[ true, "picture is required"]},
        type:{type: String, required:[ true, "type is required"]}

},
 {timeStamps: true})
const adminPropBModel = mongoose.model ("adminPropBModel", adminPropBSchema)
module.exports = adminPropBModel