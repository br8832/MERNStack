import * as ActionTypes from "../actionTypes"
const INITIAL_STATE=[]
let ReviewReducer = (state,action)=>{
    console.log(state,action)
    switch (action.type) {
        case ActionTypes.AddReview:
            return [...state, action.payload]
        case ActionTypes.UpdateReview:
            return state.map((r)=>{
                console.log(r, action.payload)
                if(r._id==action.payload.id) {return Object.assign(o,{review:action.payload.review})}
                else {return o}
            })
        default:
            return state;
    }

}
export default ReviewReducer