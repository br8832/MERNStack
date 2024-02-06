import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UpdateCoupon } from '../../../State/Coupon/couponAction'


let CouponHook = ()=>{
    let coupon = useSelector((state)=>state.CouponReducer)
    let dispatch = useDispatch()
    const generate = ()=>{
        let discount = Math.floor(100000 + Math.random() * 900000)
        console.log(discount)
        
        dispatch(UpdateCoupon(discount))
    }
    return (<>
    <h1>Free Coupon codes galore</h1>
    <button onClick={generate}> Generate Coupon</button>
    <p>{coupon ? `Coupon value is ${coupon}: What a steal!!!!`:""}</p>
    </>)
}
export default CouponHook