import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { addItemToCart } from "../../../State/Cart/cartAction";


let ProductItemComponent = ({product})=>{
    let nav = useNavigate()
    let [showHide, toggleShowHide] = useState(false)
    let dispatchToAddProduct = useDispatch();
    let addProductToCart = ( product )=>{
        
        dispatchToAddProduct(addItemToCart(product))
    }
    let toReview = (e) =>{

        nav("/review",{state: {_id:product._id}})
        
    }
    return(
        <ul className="product">
            <li className="product" onClick={()=>toggleShowHide(!showHide)}>
            {product.name}
                {showHide ? 
                    <ul>
                    <li>{product.price}</li>
                    <li>{product.desc}</li>
                    <li>{product.rating}</li> 
                    {}<button onClick={toReview}></button>
                    <button onClick={()=>{addProductToCart(product)}}>Add To Cart</button>
                </ul>
                : 
                " "} 
            </li>
        </ul>   
    )
    

}

export default ProductItemComponent;