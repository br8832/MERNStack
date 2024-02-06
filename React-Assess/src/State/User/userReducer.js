import * as ActionTypes from "../actionTypes"
// reducers - intitialize state
// makes testing as admin easier
const INITIAL_STATE = {User:{
    userName:"admin", password:"root", street:"Cali", mobile:1234567890
}}
// const INITIAL_STATE = {User:{
//     userName:"Bryan", password:"123", street:"Earth", mobile:1231231234
// }}
// const INITIAL_STATE={User:{}}

// updat states
let UserReducer = (state = INITIAL_STATE, action)=>{
    switch(action.type){
        case ActionTypes.AddUserToStore:
            //...state : {User, Product ...etc}
            //returning all other states as it is but updating User using payload
            return {...state, User : action.payload}

        default:
            return state
    }
}

export default UserReducer;

