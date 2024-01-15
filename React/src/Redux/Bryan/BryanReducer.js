import * as ActionTypes from "../actionTypes"
const INITIAL_STATE={ME:{ username:"Earth",
age:1000,
country:"USA",
ofAge: true}}
// a reducer will take an incoming state and the action to be perform
// will return a new state
const BryanReducer = (state=INITIAL_STATE, action)=>{
    switch (action.type){
        case ActionTypes.BryanUpdate:
            return {...state, ME: action.payload}
        case ActionTypes.BryanReset:
            return INITIAL_STATE
        default:
            return state
    }
}
export default BryanReducer