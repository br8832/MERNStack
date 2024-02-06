import * as ActionTypes from "../actionTypes"
import axios from "axios";
export const AddReviewToStore = (order) =>{
    return {type:ActionTypes.AddReview, payload:order}
}
export const UpdateReview = ({id,review}) =>{
    return {type:ActionTypes.UpdateReview, payload:{id,review}}
}
export const saveReviewToDb = (id, review) =>{
    return function(dispatch){
        axios.post("http://localhost:9000/order/review/save", {userid:id, review}).
        then((order)=>{
            console.log(order)
            dispatch(AddReviewToStore(order.data))}).
        catch((e)=>console.log("error in saving", e))
    }
}