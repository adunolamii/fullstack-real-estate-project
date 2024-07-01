const { mongoose } = require("mongoose");

const adminPropVSchema =  mongoose.Schema(
    {picture:{type: String, required:[ true, "picture is required"]},
    type:{type: String, required:[ true, "type is required"]}

},
 {timeStamps: true})
const adminPropVModel = mongoose.model ("adminPropVModel", adminPropVSchema)
module.exports =adminPropVModel