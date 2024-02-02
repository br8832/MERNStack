import React from "react";
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
        {recentOrders.map((order,index)=>{return <OrderItem data={calculate(order.cart)} key={order.dateCreated} parent="Recent" index={index}/>
        })
        }
       
    </>)
}