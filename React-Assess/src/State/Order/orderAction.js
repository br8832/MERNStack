import * as ActionTypes from "../actionTypes"
import axios from "axios"
export const AddOrderToStore = (order) =>{
    return {type:ActionTypes.AddOrder, payload:order}
}
export const RemoveOrder = (order) =>{
    return {type:ActionTypes.RemoveOrder, payload:order}
}
export const UpdateOrder = (id) =>{
    return {type:ActionTypes.UpdateOrder, payload:{id}}
}

export const saveOrderToDb = (id, cart, date=new Date(), status="pending") =>{
    return function(dispatch){
        axios.post("http://localhost:9000/order/recent/save", {userid:id,cart:cart,dateCreated:date,status:status}).
        then((order)=>{
            console.log(order)}).
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
                dispatch(UpdateOrder(id))
            }).
            catch((e)=>console.log("error while canceled", e))
    }
}