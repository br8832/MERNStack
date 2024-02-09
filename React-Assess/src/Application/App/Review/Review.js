// https://codepen.io/redlabor/pen/KKNRBp - htmlFor stars

import React,{useEffect, useRef} from "react"
import { useDispatch, useSelector } from "react-redux"
import {useLocation, useNavigate} from 'react-router-dom';
import { saveReviewToDb } from "../../../State/Review/reviewAction";
const createReview = (props)=>{
    let tval = useRef("null")
    let ival = useRef("null")
    let oneReview = true
    let dispatch = useDispatch()
    const location = useLocation();
    let nav= useNavigate()
    let product = location.state.product
    let user = useSelector((state)=>state.UserReducer.User)
    let reviews = useSelector((state)=>state.ReviewReducer)
    useEffect(()=>{tval.current.value="";ival.current.value=""},[tval,ival])
    console.log(reviews)
    return(oneReview ? <> <h1>{user.userName}, We would appreciate your review of {product.name}</h1>
    <textarea placeholder="Write your Review" ref={tval} />
   <input id="desc" title={ival.current.value} type="range" max={5} ref={ival} step={0.5}></input>
   <button onClick={(e)=>{
    //console.log(user._id, product._id, tval, ival)
    oneReview=false
        dispatch(saveReviewToDb(user._id, product._id, tval.current.value, Number(ival.current.value)))
        nav("/recent")
        e.preventDefault()
        }}>Submit review</button>
    </>: <h1>Thank you for the review, you may navigate back to review more products</h1>)
}
export default createReview