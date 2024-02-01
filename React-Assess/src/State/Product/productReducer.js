import * as ActionTypes from "../actionTypes"
const INITIAL_STATE={
    products:[]
    ,product:{
    name:"product",
    price: 123,
    desc: "desacription of producto",
    rating: "Aight"
}}
const ProductReducer = (state=INITIAL_STATE, action)=>{
    switch(action.type){
        case ActionTypes.AddProductToStore:
            return {...state, products:action.payload.products}
        default: 
            return state
    }
}
export default ProductReducer