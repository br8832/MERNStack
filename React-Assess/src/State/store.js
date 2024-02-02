//redux - 
//1. store - <centralized data source for react app combination of multiple states>
//2. action - <object that contains (actionType-what to do to product) and payload(productitself in json)>
//3. action creator -
//4. reducer/callback - <initialize states and create functions to create new state, upon actions>
//5. dispatch -
//this would be the definition of store which will get all the reducers combined as one state and do the job broadcasting
//new state to each subscribed component
//import reducers, create/configures store, import middle ware to make calls, combineReducer, export store
//only one store is allowed in one applicaiton, applications data model,
//one reducer per store so we need to combine if multilpe reducers are there
//store sends notification to view for change of state
//this allows to inject middlewares like thunk, promise in application 

import { combineReducers, applyMiddleware } from "redux";
import { configureStore } from '@reduxjs/toolkit';

import thunk from "redux-thunk"; //is used to pipeline the dispatched objects and give us a feeling of sync execution by being async

import UserReducer from "./User/userReducer";
import StudentReducer from "./Student/studentReducer";
import ProductReducer from "./Product/productReducer";
import CartReducer from "./Cart/cartReducer";
import CouponReducer from "./Coupon/couponReducer";
import OrderReducer from "./Order/orderReducer";
//import productReducer from "./Product/productReducer";
//import cartReducer from "./Cart/cartReducer";
//combine reducer is used to combine all the reducers we need in our store/state
const rootReducer = combineReducers({
    UserReducer,//state.userReducrer.User.userName
    StudentReducer,// state.StudentReducer.Student.*
    ProductReducer, // state.ProductReducer.product
    CartReducer, //state.CartReducer == is itself the array
    CouponReducer, //state.CoupondReducer == the numberic value itsel
    OrderReducer //state.OrderReducer == an array of carts
})

//create configure and export the store from this code
export default configureStore(
    {reducer : rootReducer},
    {},//inital state if we want to set from store instead of reducer
    //applyMiddleware(thunk)
)
