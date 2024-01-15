console.log("Creating API using express server")

const express = require('express') //importing the express module reference
const app = express() //instantiating express top method which returns application 
const cors = require('cors');

//we can use multiple express applications by mounting them on main app
const userRoute = require("./Router/user-route")
const userApp = express();

const studentRoute = require("./Router/student-route")
const studentApp = express()
// const productRoute = require("./router/product_route")
// const productApp = express();

// const cartRoute = require("./router/cart_route")
// const cartApp = express();

console.log("We are in server.js")

app.use(cors());//middleware to expose api for other users as public
//setting up the middleware static to handle all the static files we need to serve to client
// serve static files like images css using static middleware 
app.use('/static', express.static('public')) //localhost:9000/static/alert.js

//json middle-ware for setting request content type to json in body
app.use(express.json({limit:'2mb', extended:false})); 


// app.use('/user',userApp) //localhost:9000/user/api/signinup
// userApp.use('/',userRoute)
app.use('/student',studentApp)
studentApp.use('/',studentRoute)

// app.use('/product',productApp)
// productApp.use('/', productRoute)

// app.use('/cart',cartApp)
// cartApp.use('/', cartRoute)

//wild card operator / default api
app.get('*',(req, res)=>{
  res.send('<h2>API you"re looking for is not ready yet!!! <h2>')
})
console.log("We are listening at 9000")

//open the port for api to start listening the request/web-request
app.listen(9000) //localhost:9000
console.log("API is ruuning at http://localhost:9000")