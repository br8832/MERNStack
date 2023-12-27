import React from "react";
import { NavLink } from "react-router-dom";
class Header extends React.Component{
    constructor(props){
        super(props)
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
            <NavLink to="/test" className="button" activeclassname="success" >Testing Features </NavLink>
            <NavLink to="/about" className="button" activeclassname="success" >About </NavLink>
        </div>

       
        </>
        )
    }
}


export default Header