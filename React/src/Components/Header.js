import React from "react";
import { NavLink } from "react-router-dom";
import {connect} from "react-redux"
class Header extends React.Component{
    constructor(props){
        super(props)
        //console.log(props)
        this.state={
            name:"Bryan"
        }
    } 
   render(){
        let username=this.props.username
        return(
        <>Hi <b>{username +", "}</b> Welcome to SynergisticIT Shopping Cart 
        {username == "" ?<b> Please Login to see other features</b>:""}
         
        <div>
            <NavLink to="/bryan" className="button" activeclassname="success" >Bryan </NavLink>
            <NavLink to="/assess" className="button" activeclassname="success" >Assess </NavLink>
            <NavLink to="/test" className="button" activeclassname="success" >Testing Features </NavLink>
            <NavLink to="/about" className="button" activeclassname="success" >About </NavLink>
            <NavLink to="*" className="button" activeclassname="success" >Life </NavLink>
        </div>

       
        </>
        )
    }
}
// for example, here we want to read the username from the Bryan component
let mapStateToProps = (state)=>{ 
    console.log(state)//state - store object from configure store in store.js
    return { //define the props that we need to read from store  ME : state.BryanReducer.ME
        username: state.BryanReducer.ME.username //I only need the username fro bryanreducer

    }
}

export default connect(mapStateToProps, null)(Header);
