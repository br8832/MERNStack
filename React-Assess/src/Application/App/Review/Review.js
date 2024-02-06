import React from "react"
import { useSelector } from "react-redux"
const Review = (props)=>{
    let reviews = useSelector((state)=>state.ReviewReducer)
    return(<> {reviews ? 
    reviews.map((r)=>{return <p>Hello{JSON.stringify(r)}</p>})
    
    :<h1>Still Working on it</h1>}
    </>)
}
export default Review