import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { BuyOrderAgain, CancelOrder} from '../../../State/Order/orderAction'
import { addItemToCart } from '../../../State/Cart/cartAction'
let OrderItem = (props)=>{
    let order=useSelector((state)=>state.OrderReducer.filter((o)=>o.status!="cancelled")[props.index])
    let {amount,count} = props.data
    let dispatch = useDispatch()
    let buyAgain = (order)=>{
        for(const product of order.cart){
            dispatch(addItemToCart(product))
        }
        dispatch(BuyOrderAgain(order._id))
    }
    let cancel = (order) =>{
        let condition = Date.now()-new Date(order.dateCreated).getTime()<172800000;//2*24*60*60*1000
        //console.log(condition, order)
        if(condition)
        {//cancel it
            dispatch(CancelOrder(order._id)) 
        }
        else{
            alert("I'm sorry to inform you 2 days have passed. Paga hp")
        }
    }
    return(<section>
        <h2>Order {props.index+1}</h2>
        <table><thead><tr>
            <th>Name:</th>
            <th>Price:</th>
            <th>Description:</th>
            <th>Rating:</th>
            <th>Quantity:</th>
        </tr></thead>
        {order.cart.map((item)=>{return (
            <tbody>
            <tr>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.desc}</td>
            <td>{item.rating}</td>
            <td>{item.qty}</td></tr>
            </tbody>)
        })
        }  
        </table>
        <h3>Cart Info <p style={{color:"red"}}>{order.status}</p></h3> 
        <p> Amount: {amount} </p>
        <p> Products Count: {count} </p>
        {//need to check
        }
        {props.parent=="Recent"?<button onClick={()=>cancel(order)}>Cancel Order</button>:<><p>Buy Again, I'll even give you a coupong on the house</p><button onClick={()=>buyAgain(order)}>Buy Again</button></>}
        <button>Reorder</button>
    </section>)
}
export default OrderItem