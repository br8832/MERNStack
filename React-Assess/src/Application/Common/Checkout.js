import React, { useState, Fragment } from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../App/Cart/CartItem';
import CartSummary from '../App/Cart/CartSummary';
let recalculate = (cartItems)=>{
    let amount = 0, 
        count = 0;

    for(let item of cartItems) {
        amount += item.qty * item.price;
        count  += item.qty; 
    }

    return {
        amount,
        count 
    }
}
let Checkout = (props) =>
{
    let cart = useSelector((state)=>state.CartReducer)
    let user = useSelector((state)=>state.UserReducer.User)
    let [message,toggleMessage] = useState(true)
    return(
        <>
        <h1>{message?"Checkout":"Payment"} Page</h1>
        {message?<>
        <p>Delivering to {user.userName} at Address: {user.street}</p>
        <>
        {
            cart && cart.length >= 1 ? 
            <>
             <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Rating</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        {
                            props.readOnly ?  "" :
                                <Fragment>
                                    <th>Remove</th>
                                    <th>Edit</th>
                                </Fragment>
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map(item=>{
                            return <CartItem item={item} readOnly={props.readOnly} key={item._id}/>
                        })
                    } 
                </tbody>
                </table>
                <CartSummary data={recalculate(cart)} readOnly={props.readOnly} />
                <button onClick={()=>toggleMessage(false)}>Proceed to Payment</button>
            </>
            : 
            <h2>Error please go back</h2>
        }

    </>

    </> :<><h2>Thank you for the payment, your items under process!</h2></>}
        </>
        )
}
export default Checkout