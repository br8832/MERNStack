import React, { useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { addItemToCart } from "../../../State/Cart/cartAction";
import { useNavigate } from "react-router-dom";


let ProductItemComponent = ({product})=>{
    let hasReviews = useSelector((state) => state.ReviewReducer.some((r)=>product._id==r.productid))
    //console.log(productReviews)
    let [showHide, toggleShowHide] = useState(false)
    let dispatchToAddProduct = useDispatch();
    let nav=useNavigate()
    let addProductToCart = ( product )=>{
        dispatchToAddProduct(addItemToCart(product))
    }
   let viewReviews = (product)=>(nav("/viewreviews",{state:{product}}))
    return(
        <ul className="product">
            <li className="product" onClick={()=>toggleShowHide(!showHide)}>
            {product.name}
                {showHide ? 
                    <ul>
                    <li>{product.price}</li>
                    <li>{product.desc}</li>
                    <li>{product.rating}</li> 
                    {hasReviews?<button onClick={()=>{viewReviews(product)}}>View Reviews</button>:""}
                    <button onClick={()=>{addProductToCart(product)}}>Add To Cart</button>
                </ul>
                : 
                " "} 
            </li>
        </ul>   
    )
    

}

export default ProductItemComponent;