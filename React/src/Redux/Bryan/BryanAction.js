import * as ActionTypes from "../actionTypes"
// for the actions {} define the type(what you will do)
// and payload(the object to perform the action on)
export const Initialize = (user)=>{
    return{type:ActionTypes.BryanUpdate,
    payload:user}
}
export const Reset = (_)=>{
    return {
        type:ActionTypes.BryanReset,
        payload: {}
    }
}