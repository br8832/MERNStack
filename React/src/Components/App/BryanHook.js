// Hooks - function for a dedicated functionality
import React, {useState, useRef, useEffect} from "react"
//      stateToProps dispatchToProps
import {useSelector, useDispatch} from "react-redux"
//   no container anymore
import { Reset as res,Initialize } from "../../Redux/Bryan/BryanAction"

let BryanHook = (props)=>{
    const INITIAL_STATE={ username:"Earth",
age:1000,
country:"USA",
ofAge: true}
    //ex for useEffect()
    let val = 0
    let  interval = setInterval(()=>console.log(val++),5500)
console.log(props)
    // try useRef
    let sessionName = useRef(null)
    //get with use Selector - this.state = props.ME 
    
    let ME = useSelector((state)=>state.BryanReducer.ME)
    let [user,setUser]= useState(ME)
    console.log(ME, user)
    let check = (e) =>{
    
        let val = e.target.value
        switch(e.target.id){
            case "username":
                setUser({...user, username:val})//this.setState({username:val})
                console.log("username")
                break;
            case "age":
                setUser({...user, age:val, ofAge:val > 18})//this.setState({age:val, ofAge:val > 18})
                console.log("age")
                break;
            default:
                setUser({...user, country:val})//this.setState({country:val})
                console.log("default - country")
        }
        e.preventDefault()
       
    }   
    // Note these 2 use the names in mapDispatchToProps
    // here we update(publish) the this.state===BryanReducer.Me
    let dispatch = useDispatch()
    let submit = (e) =>{
        dispatch(Initialize({}))
        //this.props.Change(this.state)
        e.preventDefault()
    }
    // here we reset it
    let reset = (e)=>{
        dispatch(res())
        setUser(INITIAL_STATE)
        e.preventDefault()
    }
    //use Effext
    useEffect(()=>{
        sessionName.current.value = user.username
        return ()=>{clearInterval(interval)}
    },)
    let readFormData = (evt)=>{
 
        setUser({...user, username:sessionName.current.value})
        console.log(user)
        dispatch(Initialize(user))

        evt.preventDefault();
    }
    return (
        <>
        <h1 style={{fontSize:"0.21em"}}>{JSON.stringify(props)} from Props</h1> 
        <h1 style={{fontSize:"0.21em"}}>These are from store</h1><ul>
        <li>username: {user.username}</li>
        <li>Age: {user.age}</li>
        <li>Country: {user.country}</li>
        <li>ofAge: {String(user.ofAge)}</li>
        </ul>
        <form action="/api/login">
        <input type="text" maxLength="30" value={user.username} placeholder="Enter Username" id="username" onChange={check}></input>
        <input type="text" maxLength="30" value={user.age} placeholder="Enter Age" id="age" onChange={check}></input>
        <input type="text" maxLength="30" value={user.country} placeholder="Enter Country" id="country" onChange={check}></input>
        <button onClick={submit}>Big E</button>
        <button onClick={reset}>reset</button>
        </form>
        <form className={"form col-md-10 userHook"} onSubmit={readFormData}>                
                <label>
                    <b>User Name :</b>
                    <input type="text" className={"form-control col-md-12"} ref={sessionName}
                    placeholder="Please enter session name" maxLength={20} required/>
                </label>
                <br/>
                <input type="submit" className={"btn btn-primary"} value="Signin" />
        </form>
        </>
    )
}
export default BryanHook