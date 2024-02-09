import * as ActionTypes from "../actionTypes"
import axios from "axios";
export const AddReviewToStore = (review) =>{
    return {type:ActionTypes.AddReview, payload:review}
}
export const UpdateReview = ({id,review}) =>{
    return {type:ActionTypes.UpdateReview, payload:{id,review}}
}
export const saveReviewToDb = (userid, productid, review, rating) =>{
    return function(dispatch){
        console.log("in save action")
        axios.post("http://localhost:9000/review/save", {userid, productid, review, rating}).
        then((order)=>{
            console.log(order)
            dispatch(AddReviewToStore(order.data))}).
        catch((e)=>console.log("error in saving", e))
    }
}
export const getReviews =()=>{
    return function(dispatch){
        axios.get(`http://localhost:9000/review/get?id=${''}`).
        then((reviews)=>{for (const review of reviews.data) dispatch(AddReviewToStore(review))}).
        catch((e)=>console.log("error in retrieveing", e))
    }
}
