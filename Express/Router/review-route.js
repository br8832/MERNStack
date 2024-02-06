let express = require('express');
let reviewRoute = express.Router();
let reviewModel=require("../DataModels/reviewDataModel")
//localhost:9000/review
reviewRoute.post("http://localhost:9000/order/review/save",(req,res)=>{
    console.log("in review-route save",req.body) //expect an object with 2 properties{userid, review}
    let review = new reviewModel(req.body)
    review.save().then((o)=>res.send(o)).catch((e)=>console.log(e))
})