let express = require('express');
let cartRoute = express.Router();
const cartDataModel = require("../DataModels/cartDataModel")

cartRoute.post("/api/saveCart",(req, res)=>{
    console.log(req.body)
    cartDataModel.findOne({userid: req.body.userid})
        .then((cartDbObj) => {        
                if (!cartDbObj) { //checks for null cart of given user
                        let cartObj = new cartDataModel(req.body);
                        cartObj.save().then((data)=>{res.json(data)})
                        .catch((err)=>{res.send("Error Occurred"+ err)});
                }
                else{
                    cartDbObj.cart = req.body.cart;//replacing db cart with cart that user has sent from cartcomponent page
                    cartDbObj.save()
                    .then((data)=>{        
                        setTimeout(()=>{
                            res.json(data)},3000)})
                    .catch((err)=>{
                        res.send("Error Occurred"+ err);
                    })
                }
  })
  .catch((err)=>{
        console.log("got an error!", err);            
        res.send("error while fetching cart!");
  });

});
cartRoute.post("/api/getCart",(req, res)=>{
    cartDataModel.findOne({userid: req.body.id})
        .then((cart) => { res.json(cart) })
        .catch((err)=>{res.send("Error Occurred"+ err);})
});

module.exports = cartRoute;