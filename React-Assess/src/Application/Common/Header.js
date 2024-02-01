import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

let HeaderComponent = (props)=>{
    console.log("Rendering the header component")
    console.log(props.user)
    let userName = props.user.userName ? props.user.userName : "";
    let toggle = Boolean(userName)
    return(
        <>
             {userName?<> Hi <b>{userName +", "}</b></>: "" }Welcome to SynergisticIT Shopping Cart
            {userName == "" ?<b> Please Login to see other features</b>:""}
             
            <div>
                <NavLink to="/" className="button" activeclassname="success" >Home </NavLink>
                <NavLink to="/user" className="button" activeclassname="success" >Login </NavLink>
                <NavLink to="/coupon" style={{display: toggle?"revert-layer":"none"}} className="button" activeclassname="success" >Coupon </NavLink>
                <NavLink to="/cart" style={{display: toggle?"revert-layer":"none"}} className="button" activeclassname="success" >Cart </NavLink>
                <NavLink to="/product" style={{display: toggle?"revert-layer":"none"}} className="button" activeclassname="success" >Product </NavLink>
                <NavLink to="/about" className="button" activeclassname="success" >About </NavLink>
            </div>            
        </>
    )
}
//<NavLink to="/success" className="button" activeclassname="success" >Success </NavLink>
//<NavLink to="/lifecycle" className="button" activeclassname="success" >lifecycle </NavLink>
//<NavLink to="/user" className="button" activeclassname="success" >Login </NavLink>
//<NavLink to="/student" className="button" activeclassname="success" >Student </NavLink>

//when we want component to become subscriber must implement - mapStoreToProps
let mapStateToProps = (state)=>{ //state - store object from configure store in store.js
    return { //define the props that we need to read from store
        user : state.UserReducer.User //now props.user - can be used in component to read user Initial_state
    }
}

//when we need to make our component a publisher must implement this
//let mapDispatchToProps;


export default connect(mapStateToProps, null)(HeaderComponent);

            {/* <div>
                <h3>{props.header}</h3>
                <h3>Name - {props.name}</h3>

                <button onClick={()=>props.getChildData("Gauri!!! from child component")}>Pass To Parent</button>
            </div> */}
//export default HeaderComponent;