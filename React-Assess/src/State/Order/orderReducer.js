//Order reducer is an array of carts purchased
import * as ActionTypes from "../actionTypes"
let OrderReducer =(state=[], action)=>{
    //console.log(state,action)
    switch (action.type) {
        case ActionTypes.AddOrder:
            return [...state, action.payload]
        case ActionTypes.RemoveOrder:
            return state.filter((o)=>o._id!=action.payload.id)
        case ActionTypes.UpdateOrder:
            return state.map((o)=>{
                console.log(o, action.payload)
                if(o._id==action.payload.id) {return Object.assign(o,{status:action.payload.status})}
                else {return o}
            })
        default:
            return state;
    }
}
export default OrderReducer