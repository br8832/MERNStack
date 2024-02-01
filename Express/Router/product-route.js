let express = require('express');
let productRoute = express.Router();
const productModel = require("../DataModels/productDataModel")
//localhost:9000/product/api/add
productRoute.post("/api/add",(req,res)=>{
    const collection = new productModel(req.body)
    collection.save().then((newData)=>res.send(newData)).catch((err)=>console.log(err))
})
// productRoute.post("/api/add",(req,res)=>{
//     const product = req.body
//     productModel.findOne({name:product.name}).then((existingProduct)=>{
//         if(existingProduct){
//             console.log(`Welcome ${product.name}`)
//             res.send(product)
//         }
//         else{
//             let productToAdd = new productModel(product)
//             productToAdd.save().then((newProduct)=>res.send(newProduct)).catch((err)=>res.send("error"))
//         }
//     }).catch((err)=>{console.log(err);console.log("Error while saving")})
// })
productRoute.get("/api/getAll",(_, res)=>{
    productModel.find()
    .then((allproduct)=>{
        res.send(allproduct)
    })
    .catch(()=>{
        res.send("error while fetching products")
    })
})
module.exports = productRoute