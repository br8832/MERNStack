const express = require('express')
const clientRouter = express.Router()
const path = require('path')
clientRouter.get('/hello', function (req, res) {
    res.send('Hello World')
  })
  
  clientRouter.get('/info', function (req, res) {
      res.json({
          session : "MERNSTack",
          topic : "Express JS",
          apiname : "Give Session Info",
          built : "Using NodeMon",
          command : "npm start"
      })
  })
  
  //api using query-string => localhost:3000/query?name=Robert&age=99&address=somewhere on moon&id=25
  clientRouter.get('/query',(req, res)=>{
      let qs = req.query //request object converts query string into JSON 
      console.log(qs)
  
      if (qs.id==25) {
        res.json(qs)  
      } else {
        res.send("Invalid ID!!!!")
      }
      
  })
  
  //api using route param => localhost:3000/routeParam/25
  clientRouter.get('/routeParam/:id',(req, res)=>{
      let param = req.params["id"]
      console.log(param)
  
      if (param==25) {
        res.send("A valid parameter!! We are fetching user by ID")
      } else {
        res.send("Invalid ID. Please use valid route parameter")
      }
  })
  
  clientRouter.get('/file', function (req, res) {
    res.sendFile(path.join(__dirname, '..','public','index.html'))
  })
  
  clientRouter.get('/static.js', function (req, res) {
    res.sendFile(path.join(__dirname, '..', 'public','static.js'))
  })
  
module.exports = clientRouter