import * as ActionTypes from "../actionTypes"
// stores only let you do one coupon at a time so make it a single number
const INITIAL_STATE = 0

let CouponReducer = (state=INITIAL_STATE, action) =>{
    //console.log(state,action)
    switch (action.type){
        case ActionTypes.AddCoupon:
            return action.payload
        default: 
            return state
    }     

}
export default CouponReducer