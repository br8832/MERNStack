import * as ActionTypes from "../actionTypes" 
const Initial_State = {messages:["You can add Products from Product Screen", "You can add Items from Cart Page",
"You can review your cart at checkout", "You can make payment at payment page", "To cancel go to cancelled orders", 
"To reorder go to Recent orders",   // static are thess messages
"Number of items in cart ", "order has been cancelled"] // dynamic message
, countVisible:7, dynamic:false}
const NotificationReducer = (state=Initial_State, action)=>{
    switch (action.type) {
        case ActionTypes.AddNotification:
            return {...state,countVisible:state.countVisible+1, dynamic:action.payload}
        case ActionTypes.DeleteNotification:
            return {...state,countVisible:state.countVisible-1}
        default:
            return state
    }
}
export default NotificationReducer