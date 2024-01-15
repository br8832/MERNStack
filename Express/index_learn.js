console.log("Creating API using express server")
//https://stackoverflow.com/questions/27117337/exclude-route-from-express-middleware
var unless = function(path, middleware) {
  return function(req, res, next) {
      if (path == req.path) {
          return next();
      } else {
          return middleware(req, res, next);
      }
  };
};
const express = require('express') //importing express package and use top level express method
const app = express() //using express function we initialize express application
const adminApp = express() //created to load the request for admin/backend work
const adminRoutes = require("./Router/adminRoute")
const clientRouter = require("./Router/clientRoute")
const fs=require("fs")
app.use(unless("/admin",clientRouter))
adminApp.use('/',adminRoutes)
app.use('/admin',adminApp)

//setting up the middleware static to handle all the static files we need to serve to client
// serve static files like images css using static middleware 
app.use('/static', express.static('public')) //localhost:9000/static/alert.js
app.get('/student',(req,res)=>{
  let qs = req.query // is JSON I think?
  console.log(qs)
  let writer = fs.createWriteStream('studentIfo.json')
  let string = `Name:${qs.name} Address:${qs.address} Session:${qs.session} Age:${qs.age}`
  console.log(string)
  writer.write(JSON.stringify(qs))
  writer.close()
  res.send(string)
})


//default or wild card operator to serve request for any request/path
app.get('*', function (req, res) {

  let deviceType = req.rawHeaders.indexOf('')

  res.send(req.headers['user-agent'])
  
})

app.listen(3000)

console.log("API is ruuning at http://localhost:3000")