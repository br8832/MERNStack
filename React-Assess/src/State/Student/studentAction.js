import * as ActionTypes from "../actionTypes"
import axios from "axios"
export const AddStudent = (student)=>{
    return {type: ActionTypes.AddStudentToStore, payload:student}
}
export const saveStudentToDb = (student)=>{
    // thunk - makes it behave synchronously
    return (dispatch)=>{
       // here we go with ajax call : to save data to the server or fetch it from the server
       // using fetch method of react
       console.log("called by dispatch and synced by thunk");
       //dispatch(loading(true)); //Jquery - ajax
       axios.post("http://localhost:9000/student/api/signinup",//uri or end point of singninup api
               student //passing into the body req.body
           )
           .then((savedUser)=>{
               let signdUser = savedUser.data;
               console.log(signdUser)

               dispatch(AddStudent(signdUser))
               //dispatch(getUserCart(signdUser._id))
           })
           .catch((err)=>{
               console.log(err)
           })
    }
}