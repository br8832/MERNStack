import React, { useEffect, Fragment } from "react";
import { useSelector, useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import { saveCartToDb } from "../../../State/Cart/cartAction";

let CartHook = (props)=> {

    let cartList = useSelector((state)=>state.CartReducer)//reading cart data from store
console.log(cartList)
    let user = useSelector((state)=>state.UserReducer.User)
    console.log(user)
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

    let dispatchToSaveCart = useDispatch()

    let clickToSaveCart = (cart, userId)=>{
        if(!userId){
            alert("Please sign in to save the cart!!!")
        }else{
            dispatchToSaveCart(saveCartToDb(cart, userId))
        }
    }

    let navigate = useNavigate();
    let func = (evt)=>{
        navigate('/checkout');
        evt.preventDefault();
    }
    
    return(
        <>
            <h1>Cart Component</h1>
            {
                cartList && cartList.length >= 1 ? 
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
                            cartList.map(item=>{
                                return <CartItem item={item} readOnly={props.readOnly} key={item._id}/>
                            })
                        } 
                    </tbody>
                    </table>
                    <CartSummary data={recalculate(cartList)} readOnly={props.readOnly} />
                    {
                        props.readOnly ? <></> : 
                            <Fragment>
                                <button onClick={() => clickToSaveCart(cartList, user._id)} >
                                        Save Cart
                                </button>
                                
                                <button onClick={func} >
                                    Go To Checkout
                                </button>
                            </Fragment> 
                    }
                </>
                : 
                <h2>Please add product to cart</h2>
            }

        </>
    )
}

export default CartHook;