import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { DeleteNotification } from "../../../State/Notification/notificationAction"
import { useNavigate } from "react-router-dom"

// 1. To Add Products from Product Screen
// 2. To Add Items from Cart Page
// 3. To review cart from Checkout Page
// 4. To Make Payment from Payment Page
// 5. To Assist Them for cancel/reorder
export default function SingleNotification(props){
    let Notifications = useSelector((state)=>state.NotificationReducer.messages)
    let staticNotifications = Notifications.filter((_,index)=>index<6)
    let otherTwo = Notifications.filter((_,i)=>i>5)
    let dynamicDisplay = useSelector((state)=>state.NotificationReducer.dynamic)
    let itemsInCart = useSelector((state)=>state.CartReducer.length)
    let nav = useNavigate()
    let dispatch = useDispatch()
    let update = (id,message) =>{
        let item = document.getElementById(id); 
        item.style.display=='none'?item.style.display='inherit':item.style.display='none'
        dispatch(DeleteNotification(message))
        let destination;
        switch (id){
            case 0:destination="/product";break;
            case 1:destination="/cart";break;
            case 2:destination="/checkout";break;
            case 3:destination="/checkout";break;
            case 4:destination="/cancel";break;
            case 5:destination="/recent";break;
            default: destination="";
        }
        if(destination)nav(destination)
    }
    return(<>{staticNotifications.map((message,index)=>{return (<div id={index} onClick={()=>update(index,message)} style={{textAlign:"center",display:"inherit"}} className="notification">
        <p styl>{message}</p>
        </div>)})}
        
        {// the idea have total added in Notifcaion REducer
            <div id={6} onClick={()=>update(6,otherTwo[0])} style={{textAlign:"center",display:"inherit"}} className="notification">
        <p>{otherTwo[0]+`(${itemsInCart})`}</p>
        </div>}
        {   // the idea keep track in Notifation reducer of the cancelled orders
            <div id={7} onClick={()=>update(7,otherTwo[1])} style={{textAlign:"center",display:dynamicDisplay?"inherit":"none"}} className="notification">
        <p>{otherTwo[1]}</p>
        </div>}
    </>)

}
