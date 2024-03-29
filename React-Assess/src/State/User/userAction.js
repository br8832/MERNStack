// define actions to be used by action create and dispatchers to dispatch to store
import { getUserCart } from "../Cart/cartAction";
import { getOrders } from "../Order/orderAction";
import { getReviews } from "../Review/reviewAction";
import * as ActionTypes from "../actionTypes"
import axios from "axios";

//
export const AddUserToStore = (newUser)=>{
    return {
        type : ActionTypes.AddUserToStore,
        payload : newUser
    }
}

export const saveUserToDb = (user)=>{
     // thunk - makes it behave synchronously
     return (dispatch)=>{
        // here we go with ajax call : to save data to the server or fetch it from the server
        // using fetch method of react
        console.log("called by dispatch and synced by thunk");
        //dispatch(loading(true)); //Jquery - ajax
        axios.post("http://localhost:9000/user/api/signinup",//uri or end point of singninup api
                user //passing into the body req.body
            )
            .then((savedUser)=>{
                let signdUser = savedUser.data;
                console.log(signdUser)
                dispatch(AddUserToStore(signdUser))
                dispatch(getUserCart(signdUser._id))
                dispatch(getOrders(signdUser._id))
                dispatch(getReviews())
            })
            .catch((err)=>{
                console.log(err)
            })
     }
}

export const getUser = (user)=>{
    // thunk - makes it behave synchronously
    return (dispatch)=>{
       // here we go with ajax call : to save data to the server or fetch it from the server
       // using fetch method of react
       console.log("called by dispatch and synced by thunk");
       //dispatch(loading(true)); //Jquery - ajax
       axios.post("http://localhost:9000/user/api/signinup",//uri or end point of singninup api
               user //passing into the body req.body
           )
           .then((savedUser)=>{
               let signdUser = savedUser.data;
               console.log(signdUser)
               dispatch(AddUserToStore(signdUser))
               dispatch(getUserCart(signdUser._id))
           })
           .catch((err)=>{
               console.log(err)
           })
    }
}