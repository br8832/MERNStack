const mongooseObj = require("./connection")
let orderSchema = new schemaObj({
    userid:  {type:String, required:true},
    cart:  {type:[{}], required:true},
    dateCreated: {type: Date, required: true},
    dateCancelled: Date,
    status: String
},{versionKey:false})
let orderModel = mongooseObj.model("order",orderSchema)
module.exports = orderModel