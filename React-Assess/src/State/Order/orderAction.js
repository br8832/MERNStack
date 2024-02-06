import * as ActionTypes from "../actionTypes"
import axios from "axios"
export const AddOrderToStore = (order) =>{
    return {type:ActionTypes.AddOrder, payload:order}
}
export const RemoveOrder = (order) =>{
    return {type:ActionTypes.RemoveOrder, payload:order}
}
export const UpdateOrder = (id,status) =>{
    return {type:ActionTypes.UpdateOrder, payload:{id,status}}
}

export const saveOrderToDb = (id, cart, coupon=0, date=new Date(), status="pending",) =>{
    return function(dispatch){
        axios.post("http://localhost:9000/order/recent/save", {userid:id,cart:cart,dateCreated:date,status:status, coupon:coupon}).
        then((order)=>{
            console.log(order)}
            ).
        catch((e)=>console.log("error in saving", e))
    }
}
export const getOrders = (id) =>{
    return function(dispatch){
        console.log("In get orders",id)
    axios.get(`http://localhost:9000/order/recent/get?id=${id}`).
    then((orders)=>{
        const payload = orders.data
        console.log("payload",payload)
        for (const order of payload)
        {   console.log("each order",order)
            dispatch(AddOrderToStore(order))}
    }).catch((e)=>console.log("error in retrieveing", e))
    }
}
//come back to this
export const CancelOrder = (id) =>{
    return function(dispatch){
        console.log("In Cancelled", id)
        axios.post("http://localhost:9000/order/recent/cancel",{id:id}).
            then((o)=>
            {
                console.log("Successfully canceled",o)
                dispatch(UpdateOrder(id,"cancelled"))
            }).
            catch((e)=>console.log("error while canceled", e))
    }
}

export const AdminUpdateStatus = () =>{
return function (dispatch){
    axios.get("http://localhost:9000/order/recent/get?=''").
    then((orders)=>{
        console.log(orders.data)
        for(const order of orders.data){
            switch (order.status){
                case "cancelled":
                    //console.log("Cancelled" + order.status)
                case "fulfilled":
                    //console.log("Fulfilled" + order.status)
                    dispatch(AddOrderToStore(order))
                default:
                    //console.log("Default" + order.status)
                    let newStatus = Date.now()-new Date(order.dateCreated).getTime();
                    //console.log(newStatus)
                    if(newStatus>172800000){
                        //console.log("Updating status");
                        axios.post("http://localhost:9000/order/update",{id:order._id})
                    .then((res)=>{dispatch(UpdateOrder(order._id,order.status));dispatch(AddOrderToStore(order))})
                    .catch((e)=>console.log("error in updating",e))}         
            }
            
        }
    })
}

}