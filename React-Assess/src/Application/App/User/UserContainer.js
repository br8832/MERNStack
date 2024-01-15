import {connect} from "react-redux"
import UserComponent from "./UserComponent.jsx"
import { AddUserToStore, saveUserToDb } from "../../../State/User/userAction"
//subscriber
let mapStateToProps=(state)=>{
    return{user: state.UserReducer.User}
}
//publisher
let mapDispatchToProps=(dispatch)=>{
   return {
    AddUser:(newUser)=>dispatch(AddUserToStore(newUser)),
    LoginUser:(user)=>dispatch(saveUserToDb(user))
   }
}
export default connect(mapStateToProps,mapDispatchToProps)(UserComponent)