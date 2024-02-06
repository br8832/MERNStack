const mongooseObj = require("./connection")
let reviewSchema = new schemaObj({
    userid: {type:String, required:true},
    productid: {type: String, required:true},
    review: {type:String, required:true}
    
},{versionKey:false})
let ReviewModel = mongooseObj.model("product",reviewSchemaSchema)
module.exports = ReviewModel