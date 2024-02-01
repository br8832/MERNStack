import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchProducts } from "../../../State/Product/productAction";
import ProductItemComponent from "./ProductItemComponent";

let DisplayProduct = (props)=>{
    console.log()
    let products = useSelector((state)=>state.ProductReducer.products);
    console.log(products)
    let dispatchToFetchProducts = useDispatch();

    useEffect(()=>{
        products && products.length == 0 ? dispatchToFetchProducts(fetchProducts()) : ""
    },
    []) //executes for one time and then initializes products with [] //componentDidMount

    return(
        <>
            {
                products && products.length >= 1 ? 
                    products.map((product)=><ProductItemComponent product={product}/>)
                    :<h2>No Products To Show</h2>
            }
        </>
    )
}

export default DisplayProduct;