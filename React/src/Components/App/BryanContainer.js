import {connect} from "react-redux"
import { Reset as res,Initialize } from "../../Redux/Bryan/BryanAction"
import Bryan from "./Bryan.jsx"
// here seperate the redux from reasct a bit but linked nonetheless
// now for updating we do this and note in jsx use these names
let mapDispatchToProps = (dispatch) =>{
    console.log(dispatch)
    return{
        Change:(user)=>dispatch(Initialize(user)), // here we invoke the update action, it expects a new user
        Reset:(_)=>dispatch(res()) // here we invoke the reset action, no arguments needed
    }
}
// for reading what we need, just like in header
let mapStateToProps = (state) =>{
    return{
        ME:state.BryanReducer.ME
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Bryan)