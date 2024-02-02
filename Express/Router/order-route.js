let express = require('express');
let orderRoute = express.Router();
let orderModel=require("../DataModels/orderDataModel")
//localhost:9000/order
orderRoute.post("/recent/save",(req,res)=>{
    console.log("in order-route save",req.body) //expect an object with 3 properties{userid,cartid,dateCreated,status}
    let order = new orderModel(req.body)
    order.save().then((o)=>res.send(o)).catch((e)=>console.log(e))
})
orderRoute.get("/recent/get",(req,res)=>{
    let userid = req.query.id// expect the input to be the userid
    if(userid)
    orderModel.find({userid: userid}).then((orders)=>res.send(orders)).catch((e)=>console.log("error", e))
    else
    orderModel.find().then((orders)=>res.send(orders)).catch((e)=>console.log("error", e))
})
orderRoute.get("/recent/getAll",(_,res)=>{
    orderModel.find().then((orders)=>res.send(orders)).catch((e)=>console.log("error", e))
})
orderRoute.post("/recent/cancel",(req,res)=>{
    let id=req.body.id
    //console.log("Id recieved",id)
    orderModel.updateOne({_id:id},{status:"cancelled",dateCancelled: new Date()}).then((order)=>{res.send(order)}).catch((e)=>console.log(e))
})
orderRoute.post("/update",(res,req)=>{
    let id =req.body.id
    orderModel.updateOne({_id:id},{status:"fulfilled"}).then((order)=>{res.send(order)}).catch((e)=>console.log(e))
})
module.exports=orderRoute