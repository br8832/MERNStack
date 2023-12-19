// assess3 #1

const express = require('express')
const getStudentDetails=express()
// #3
const studentRouter = require("./student_route")
getStudentDetails.use(studentRouter)
getStudentDetails.listen(4000)
console.log("API is ruuning at http://localhost:4000")