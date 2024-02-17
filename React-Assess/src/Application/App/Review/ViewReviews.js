import React from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
let ViewReviews = ()=>{
    const location = useLocation();
    let product = location.state.product
    let reviews = useSelector((state) => state.ReviewReducer.filter((r)=>product._id==r.productid))
    let users;
    axios.get("http://localhost:9000/user/api/getuser").then((user)=>users=user).catch((e)=>console.log(e))
    return(<>
    <section>
    <h1> Reviews for {product.name} </h1>
        <table>
            <thead>
                <tr>
                    <th>User</th>
                    <th>Rating</th>
                    <th>Review</th>
                </tr>
            </thead>
            <tbody>
                {reviews.map((r)=>{return (
                <tr>
                <td>{r.userid}</td>
                <td>{r.rating}</td>
                <td>{r.review}</td>
                </tr>)})}
            </tbody>
        </table>
        </section>
    </>)
}
export default ViewReviews