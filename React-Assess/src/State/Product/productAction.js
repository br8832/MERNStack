import * as ActionTypes from "../actionTypes"
import axios from "axios";
export const AddProductToStore = (products)=>{
    console.log(products)
    return {
        type : ActionTypes.AddProductToStore,
        payload : {products}
    }
}

export const saveProductToDb = (product)=>{
     return (dispatch)=>{
        console.log("called by dispatch and synced by thunk");
        
        axios.post("http://localhost:9000/product/api/add",//uri or end point of singninup api
                product
            )
            .then((savedproduct)=>{
                console.log(savedproduct)
                dispatch(fetchProducts())
                //dispatch(getUserCart(signdUser._id))
            })
            .catch((err)=>{
                console.log(err)
            })
     }
}
export const fetchProducts = ()=>{
    console.log("Product ");

    return function (dispatch) {
        //dispatch(loading(true));

        axios.get("http://localhost:9000/product/api/getAll").
        then((allProducts)=>{
            //console.log("get products response ", productresp);
            //dispatch(loading(false));
            console.log(allProducts.data)
            dispatch(AddProductToStore(allProducts.data))
        })
        .catch((err)=>{
            console.log("Error While Saving Product", err)
        })
    }
};
/*
export const saveProduct = (product)=>{
    console.log("Product ", product);

    return function (dispatch) {
        //dispatch(loading(true));

        //window.fetch - is reacts way to make ajax to server
        window.fetch("http://localhost:9000/product/api/saveProduct",{
            method: 'POST', //rest method type 
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(productresp => productresp.json())
        .then((productresp)=>{
            console.log("product save response ", productresp);
            //dispatch(loading(false));
            dispatch(fetchProducts());//fetched at the time of save it self
        })
        .catch((err)=>{
            console.log("Error While Saving Product", err)
        })
    }
} */
