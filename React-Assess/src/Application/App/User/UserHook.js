// Hooks - function for a dedicated functionality
import React, {useState, useRef, useEffect} from "react"
//      stateToProps dispatchToProps
import {useSelector, useDispatch} from "react-redux"
import {saveUserToDb } from "../../../State/User/userAction"
let UserHook =(props)=>{
    let user = useSelector((state)=>state.UserReducer.User) //so we got stuff
    
    // replace this.state ={} and this.setState
    let [uName,setUname] = useState(user.userName)
    let [pass,setPass] = useState(user.password)
    let [street,setStreet] = useState(user.street)
    let [mobile,setMobile] = useState(user.mobile)

    // map DisatchtoProps
    let dispatch = useDispatch()
    let loginUser = (e)=>{
        let user = {
            userName :uName,
            password: pass,
            street,
            mobile
        }
        dispatch(saveUserToDb(user))
        e.preventDefault()
    }
     //the reference implemenation
     let sessionName = useRef(null)
     let todaysTopic = useRef(null)
 
     let readFormData = (evt)=>{
 
         let user = {
             userName : sessionName.current.value             
         }
 
         dispatch(saveUserToDb(user))
 
         evt.preventDefault();
     }
 
     //shouldcomponentUpdate, componentDidMount
     //default it is shouldcomponentUpdate
     //when first rendering is done and UI can be accessed - componentDidMount
     //useeffect is the hook that we use to make it work as shouldComponentUpdate, componentDidMount, componentWillUnmount
    //  useEffect(()=>{
    //      console.log("Re render happend")
 
    //      //assign the values we got from reducer
    //      sessionName.current.value = user.userName //"David" 
    //      todaysTopic.current.value = user.street
 
    //      }, [sessionName, todaysTopic]) //if we pass value in second parameter it initializes and behaves as - componentDidMount
 
 
   
    return(<><h1>User Login Page - Hooks</h1>
    <section className={"componentClass"}>
        <div className="form col-md-8">
            <div className="col-md-12">
                <b>User Name</b>
                <input type="text" className="form-control col-md-6 username" value={uName} 
                    placeholder="User Name" onChange={(e)=>setUname(e.target.value)} maxLength={40}/>

                </div>
                <div className="col-md-12">
                    <b>Password</b>
                        <input type="password" className="form-control col-md-6 pass" value={pass} 
                        placeholder="Password" onChange={(e)=>setPass(e.target.value)} maxLength={40}/>
                </div>
                <div className="col-md-12">
                    <b>Street </b>
                        <input type="text" className="form-control col-md-6 street" value={street} 
                                placeholder="Street Name" onChange={(e)=>setStreet(e.target.value)} />
                    </div>
                
                    <div className="col-md-12">
                        <b>Mobile </b>
                        <input type="number" className="form-control col-md-6 mobile" value={mobile} 
                        placeholder="Mobile" maxLength="11"
                        onChange={(e)=>setMobile(e.target.value)} />
                    </div>
                    <input type="button" className={"btn btn-primary col-md-2 saveUser"} 
                                        value={"SignIn-Up"} 
                                        onClick={loginUser}/>
        </div>
    </section>
    {/* uncontrolled way by using ref keyword */}
    {/* <form className={"form col-md-10 userHook"} onSubmit={readFormData}>                
                <label>
                    <b>User Name :</b>
                    <input type="text" className={"form-control col-md-12"} ref={sessionName}
                    placeholder="Please enter session name" maxLength={20} required/>
                </label>
                <br/>
                <label>
                        <b>Password :</b>
                        <input type="password" className={"form-control col-md-12"} ref={todaysTopic} 
                                placeholder="Please enter today's topic" maxLength={20} required/>
                    </label>
                    <br/>
                <input type="submit" className={"btn btn-primary"} value="Signin" />
            </form>  */}
    </>)


}
export default UserHook