import * as ActionTypes from "../actionTypes"
const INITIAL_STATE = {
    Student:{
        userName:"Bryan", 
        pwd:"passwords1233", 
        street:"Earth", 
        mobile:18182314223, 
        session:"MERN STACK"
    }
}
const StudentReducer = (state=INITIAL_STATE, action)=>{
    switch(action.type){
        case ActionTypes.AddStudentToStore:
            return{...state, Student:action.payload}
        default:
            return state
    }
}
export default StudentReducer
