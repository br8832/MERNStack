import React, { useState } from "react"
import SingleNotification from "./Notification";
import { useSelector } from "react-redux";
export default function Notificiation(){
     let numOfNotice = useSelector((state)=>state.NotificationReducer.countVisible)
    const [isActive, setActive] = useState("false");
    let ToggleClass = () => setActive(!isActive)
    return (<><div onClick={ToggleClass} className="notifycontainer"><div style={{position:"relative"}}>
        <p style={{background:"#1f48fe",textAlign:"right", marginBottom:"0.1rem"}}>&#9776; ({numOfNotice})</p></div>
                <div style={{display:isActive?"none":""}}id="notifications">
                    <SingleNotification></SingleNotification>
                </div>
            </div></>)
}