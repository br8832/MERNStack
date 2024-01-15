import {configureStore} from "@reduxjs/toolkit"
import {combineReducers} from "redux"
import BryanReducer from "../Redux/Bryan/BryanReducer"
import ProductReducer from "../Redux/Product/ProductReducer"
// the store will have all the reducers
// and up to you in the  React part to pick what you need
const rootReducer = combineReducers({
    BryanReducer, ProductReducer
})
export default configureStore({reducer:rootReducer},{})