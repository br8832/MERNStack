const mongooseObj = require("./connection")
let productSchema = new schemaObj({
    name: {type:String, required:true},
    desc: {type:String},
    price: {type:Number, default:1},
    rating: {type:String},
    qty:{type:Number, default:1}
},{versionKey:false})
let ProductModel = mongooseObj.model("product",productSchema)
module.exports = ProductModel