import axios from "axios";
import * as ActionTypes from "../actionTypes";

export const addItemToCart = (item)=>({
    type: ActionTypes.ADD_ITEM,
    payload: {item} 
})

export const emptyTheCart = () => ({
    type: ActionTypes.EMPTY_CART
});

export const removeItem = (id) => ({
    type: ActionTypes.REMOVE_ITEM,
    payload: { id }
});

export const updateItem = (id, qty) => ({
    type: ActionTypes.UPDATE_ITEM,
    payload: {
        id, 
        qty: parseInt(qty) 
    }
});

export const saveCartToDb = (cart, userid)=>{

    console.log("Items To Be Saved", cart); 
    
    return function(dispatch) {
        axios.post("http://localhost:9000/cart/api/saveCart",{cart, userid})
    .then((cartRes)=>{console.log(cartRes)}).catch((e)=>console.log("error", e))
        //dispatch(loading(true));
        // window.fetch("http://localhost:9000/cart/api/saveUserCart",{
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({userid:userid, cart:cart})})
        // .then (response => response.json())
        // .then (usercartresponse => {
        //     console.log("response ", usercartresponse);
        //     //dispatch(loading(false));
        // })
        // .catch((err)=>{
        //     //dispatch(loading(false));
        //     console.log("Error While Saving Cart", err);
        // }) 
    }
}


export const getUserCart = (id) => {
    
    return function(dispatch) {
        console.log("Get List Of items");
        axios.post("http://localhost:9000/cart/api/getCart",{id})
        .then((usercart)=>{
            const cart = usercart.data
            //console.log("user cart got",cart)
            dispatch(emptyTheCart())
            for (const item of cart.cart) {
                        //console.log("item in for of", item);
                        dispatch(addItemToCart(item));    
                    }    
        }).catch((err)=>{
                console.log("Error While Login", err)
            })
        // window.fetch("http://localhost:9000/cart/api/getUserCart",{
        //     method: 'POST',
        //     headers: {
        //       'Accept': 'application/json',
        //       'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({userid:userid})})
        // .then (response => response.json())
        // .then (usercartresponse => {
        //     console.log("response - get user cart ", usercartresponse);
            
        //     dispatch(emptyTheCart()); //remove the duplicacy first empty the cart 
            
        //     for (const item of usercartresponse.cart) {
        //         console.log("item in for of", item);
        //         let action = addItemToCart(item);
        //         dispatch(action);    
        //     }                
                       
        // })
        // .catch((err)=>{
        //     console.log("Error While Login", err)
        // })  
    }       
}