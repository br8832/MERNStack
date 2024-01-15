import * as ActionTypes from "../actionTypes"
const INITIAL_STATE={product:{
    name:"product",
    price: 123,
    desc: "desacription of producto",
    rating: 4.5
}}
const ProductReducer = (state=INITIAL_STATE, action)=>{
    switch(action.type){
        case ActionTypes.ProductUpdate:
            return {...state, product:action.payload}
        default: 
            return state
    }
}
export default ProductReducer