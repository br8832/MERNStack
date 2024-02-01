import * as ActionTypes from "../actionTypes";

const INITIAL_STATE = [] 

export default function CartReducer(state = INITIAL_STATE, action) 
{
    console.log("cart Reducer", state, action);
    switch(action.type) 
    {
        case ActionTypes.ADD_ITEM:
            
            let newState = state.filter(item => item._id != action.payload.item._id)
            // return state.push(action.payload.item)
            
            return [...newState, action.payload.item]
        
         
        case ActionTypes.REMOVE_ITEM:
            return state.filter(item => item._id!=action.payload.id)        
        
        //update quantity of an item in cart
        case ActionTypes.UPDATE_ITEM:
            return state.map((item)=>{
                if (item._id == action.payload.id) { 
                    return {...item, qty:action.payload.qty} 
                }
                return item
            })
        case ActionTypes.EMPTY_CART:
            return []
        default:
            return state
    }
}