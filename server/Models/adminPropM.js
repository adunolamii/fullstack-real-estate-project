const { mongoose } = require("mongoose");

const adminPropMSchema =  mongoose.Schema(
    {picture:{type: String, required:[ true, "picture is required"]},
    type:{type: String, required:[ true, "type is required"]}

},
 {timeStamps: true})
const adminPropMModel = mongoose.model ("adminPropMModel", adminPropMSchema)
module.exports =adminPropMModel