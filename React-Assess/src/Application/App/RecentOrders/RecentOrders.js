import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import OrderItem from "./orderItem";

export default function RecentOrders (props) {
    let user = useSelector(state=>state.UserReducer.User)
    let recentOrders = useSelector(state=>state.OrderReducer).filter((o)=>o.status!="cancelled")
    console.log(recentOrders)
    let calculate = (cartItems)=>{
        let amount = 0, 
            count = 0;
        for(let item of cartItems) {
            amount += item.qty * item.price;
            count  += item.qty; 
        }
        return {amount,count}
    }
    return(<>
        {recentOrders.length>0? <h1>{user.userName}'s orders:</h1>:<h1>No Orders</h1>}
        {console.log("made it to recent")}
        {recentOrders.sort((o1,o2)=>{return new Date(o1.dateCreated).getTime()- new Date(o2.dateCreated).getTime()})
            .map((order,index)=>{return <OrderItem data={calculate(order.cart)} key={order.dateCreated} index={index}/>
        })
        }
       
    </>)
}