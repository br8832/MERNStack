let express = require('express');
let reviewRoute = express.Router();
let reviewModel=require("../DataModels/reviewDataModel")
//localhost:9000/review
reviewRoute.post("/save",(req,res)=>{
    console.log("in review-route save",req.body) 
    let review = new reviewModel(req.body)
    review.save().then((o)=>res.send(o)).catch((e)=>console.log(e))
})
reviewRoute.get("/get",(req,res)=>{
    let userid = req.query.id// expect the input to be the userid
    if(userid)
    reviewModel.find({userid: userid}).then((reviews)=>res.send(reviews)).catch((e)=>console.log("error", e))
    else
    reviewModel.find().then((reviews)=>res.send(reviews)).catch((e)=>console.log("error", e))
})
module.exports = reviewRoute