//assess3 #2
const fs = require('fs')
const express = require('express')

const studentRouter = express.Router()
//#4
studentRouter.get('/student',(req,res)=>{ //localhost:3000/student?name=Bryan&session=MERN&address=Earth&age=211
    let qs = req.query // is JSON I think?
    console.log(qs)
    //#5
    fs.readFile('StudentInfo.json',(err,buffer)=>{
    let writer = fs.createWriteStream('studentInfo.json')
    let string = `Name:${qs.name} Address:${qs.address} Session:${qs.session} Age:${qs.age}`
    console.log(string)
    writer.write(JSON.stringify(qs))
    writer.close()})
    
    
    res.send(string)
  })

module.exports = studentRouter;