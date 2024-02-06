import React, { useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../App/Cart/CartItem';
import CartSummary from '../App/Cart/CartSummary';
import { saveOrderToDb } from '../../State/Order/orderAction';
import { UpdateCoupon } from '../../State/Coupon/couponAction';
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
    let coupon = useSelector((state)=>state.CouponReducer)
    let dispatch = useDispatch();
    let payment  = ()=>{
        toggleMessage(false)
        console.log(cart,user)
        dispatch(saveOrderToDb(user._id,cart,coupon))
        if(coupon!=0) dispatch(UpdateCoupon(0))
        // axios.post("http://localhost:9000/order/recent/save", {userid:user._id,cart:cart,dateCreated:new Date()}).
        // then((order)=>console.log(order)).
        // catch((e)=>console.log("error in saving", e))
    
    }
    let cart = useSelector((state)=>state.CartReducer)
    let user = useSelector((state)=>state.UserReducer.User)

    let [message,toggleMessage] = useState(true)
    return(
        <>
        <h1>{message?"Checkout":"Payment"} Page</h1>
        {message?<>
        <p>Delivering to {user.userName} at Address: {user.street}</p>
        <p>{coupon==0?"":'Hey you got a coupon worth'+coupon+'dollars!!!'}</p>
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
                <button onClick={payment}>Proceed to Payment</button>
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