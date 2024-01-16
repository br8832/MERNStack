// model allows us to map with to mongodb using mongoose
// create connection with mongodb client, 
// let mongooseObj = require("mongoose");
// schemaObj = mongooseObj.Schema; //using the schema class from mongoose

//mongooseObj.createConnection("mongodb://localhost:27017")
//creates db with name mernstack16 or opens a connection if already present
const mongooseObj = require("./connection")

let userSchema = new schemaObj({
    userName : {type: String, required : true},
    password: {type:String, required : true},
    street: String,
    mobile: Number
}
,{
    versionKey: false //false - set to false then it wont create in mongodb
}
);

let UserModel = mongooseObj.model("user",userSchema);//user - collection name, pluralised by mongodb

module.exports = UserModel; //exported model to have access to all functions present in mongoose for select/insert/update