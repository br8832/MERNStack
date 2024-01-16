const mongooseObj = require("./connection")
let studentSchema = new schemaObj({
    userName: {type:String, required:true},
    pwd: {type:String, required:true},
    street: String,
    mobile: Number,
    session: String
},{versionKey:false})
let studentModel = mongooseObj.model("student",studentSchema)

module.exports= studentModel