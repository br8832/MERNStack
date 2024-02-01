import React, {useEffect, useRef} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {saveProductToDb} from "../../../State/Product/productAction"
import DisplayProduct from './DisplayProducts'
let ProductHook = () =>{
    let product = useSelector((state)=>state.ProductReducer.product)
    let user = useSelector((state)=>state.UserReducer.User)
    let dispatch = useDispatch()
    let isAdmin = user.userName=="admin"
    let name = useRef({}), price=useRef({}), desc = useRef({}), rating=useRef({})
    
    useEffect(()=>{
        name.current.value=product.name
        price.current.value=product.price
        desc.current.value=product.desc
        rating.current.value=product.rating
    },[name,price,desc,rating])
    let save = (e) => { if (isAdmin){
        const product = {name:name.current.value,
            price:Number(price.current.value),
            desc:desc.current.value,
            rating:rating.current.value}
        dispatch(saveProductToDb(product))
    }
        e.preventDefault()
    }

    return (
    <section className={"componentClass"}>
    <h1>Product name for reference is: {name.current ? name.current.value : ""}</h1>
{isAdmin?<div className="form col-md-8 productDetails">
    <div className="col-md-12">
        <b>Name</b>
        <input type="text" className="form-control col-md-6 username" ref={name} id="name"
            placeholder="Name" maxLength={40}/>

        </div>
        <div className="col-md-12">
                <b>Price</b>
                <input type="number" className="form-control col-md-6 pass" ref={price} id="price"
                placeholder="Price"  maxLength={40}/>
        </div>
        <div className="col-md-12">
        <b>Description </b>
            <input type="text" className="form-control col-md-6 street" ref={desc} id="desc" 
                   placeholder="Description"  />
        </div>
    
        <div className="col-md-12">
            <b>Rating </b>
            <input type="text" className="form-control col-md-6 mobile" ref={rating} id="rating"
            placeholder="rating" maxLength="11"
             />
        </div>

        <input type="button" className={"btn btn-primary col-md-2 saveUser"} 
                value={"Save"} onClick={save}/>
        </div>:""}
        <DisplayProduct/>
        </section>
        
         
        )
}
export default ProductHook