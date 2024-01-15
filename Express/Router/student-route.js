let express = require('express');
let studentRoute = express.Router();
const studentModel = require("../DataModels/studentDataModel");
//localhost:9000/student/api/signinup
studentRoute.post("/api/signinup",(req,res)=>{
    const student = req.body
    studentModel.findOne({userName:student.userName}).then((existingStudent)=>{
        if(existingStudent){
            console.log(`Welcome ${student.userName}`)
            res.send(student)
        }
        else{
            let studentToAdd = new studentModel(student)
            studentToAdd.save().then((newStudent)=>res.send(newStudent)).catch((err)=>res.send("error"))
        }
    }).catch((_)=>{console.log("Error while signing in")})
})
studentRoute.get("/api/getuser",(req, res)=>{
    studentModel.find()
    .then((allusers)=>{
        res.send(allusers)
    })
    .catch(()=>{
        res.send("error while fetching users")
    })
})
module.exports=studentRoute