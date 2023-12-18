import * as fs from 'node:fs'
const express = require('express')
const app=express()
app.get('/student',(req,res)=>{ //localhost:3000/student?name=Bryan&session=MERN&address=Earth&age=211
    let qs = req.query // is JSON I think?
    console.log(qs)
    let writer = fs.createWriteStream('studentIfo.json')
    let string = `Name:${qs.name} Address:${qs.address} Session:${qs.session} Age:${qs.age}`
    console.log(string)
    writer.write(JSON.stringify(qs))
    writer.close()
    res.send(string)
  })
app.listen(3000)