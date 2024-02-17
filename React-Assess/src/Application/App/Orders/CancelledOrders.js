import React from "react";
import { useSelector } from "react-redux";
import OrderItem from "./orderItem";

export default function CancelledOrders (props) {
    let user = useSelector(state=>state.UserReducer.User)
    let cancelledOrders = useSelector(state=>state.OrderReducer).filter((o)=>o.userid==user._id&&o.status=="cancelled")
    console.log(cancelledOrders)
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
        {cancelledOrders.length>0? <h1>{user.userName}'s Cancelled orders:</h1>:<h1>No Cancelled Orders</h1>}
        {cancelledOrders.sort((o1,o2)=>{return new Date(o1.dateCreated).getTime()- new Date(o2.dateCreated).getTime()})
            .map((order,index)=>{return <OrderItem data={calculate(order.cart)} parent="Cancelled" key={order.dateCreated} index={index}/>
        })
        }
    </>)
}