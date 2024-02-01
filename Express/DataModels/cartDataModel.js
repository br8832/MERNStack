const mongooseObj = require("./connection")
let CartSchema = new schemaObj({
    userid: { type:String, required:true},
    cart: [{}]
},
{
    versionKey: false //false - set to false then it wont create in mongodb
});

let CartModel = mongooseObj.model("cart",CartSchema);
module.exports = CartModel;