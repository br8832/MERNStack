import { connect} from "react-redux";
import Student from "./StudentComponent.jsx";
import { saveStudentToDb,AddStudent as ADD } from "../../../State/Student/studentAction";
let mapDispatchToProps=(dispatch)=>{
    return {
        AddStudent:(student)=>(dispatch(ADD(student))),
        saveStudent:(student)=>(dispatch(saveStudentToDb(student)))
    }
}
let mapStateToProps=(state)=>{
    return {Student: state.StudentReducer.Student}
}
export default connect(mapStateToProps,mapDispatchToProps)(Student)