import React from "react"
import { connect } from "react-redux";
import { ProductUpdate } from "../Redux/Product/ProductAction";
let Product = (props)=>
{
    console.log("",props)
    let onTextChange = (e) =>{
       console.log(state)
        let val = e.target.value
        switch(e.target.id){
            case "name":
                state.name=val
                break;
            case "desc":
                state.desc=val
                
                break;
            case "rating":
                state.rating=val
                break;    
            default:
                state.price=val
        }
        e.preventDefault()
    }
    let save = (e)=>{
        props.SaveToStore(state)
        e.preventDefault()
    }
    // expect an object with those props
    let state = props.prod
    console.log(state)
    return (<section className={"componentClass"}>
        <h1>Product</h1>
    <div className="form col-md-8">
        <div className="col-md-12">
            <b>Name</b>
            <input type="text" className="form-control col-md-6 username" value={state.name} id="name"
                placeholder="Name" onChange={onTextChange} maxLength={40}/>

            </div>
            <div className="col-md-12">
                    <b>Price</b>
                    <input type="number" className="form-control col-md-6 pass" value={state.price} id="price"
                    placeholder="Price" onChange={onTextChange} maxLength={40}/>
            </div>
            <div className="col-md-12">
            <b>Description </b>
                <input type="text" className="form-control col-md-6 street" value={state.desc} id="desc" 
                        placeholder="Descrition" onChange={onTextChange} />
            </div>
        
            <div className="col-md-12">
                <b>Rating </b>
                <input type="number" className="form-control col-md-6 mobile" value={state.rating} id="rating"
                placeholder="Mobile" maxLength="11"
                onChange={onTextChange} />
            </div>

            <input type="button" className={"btn btn-primary col-md-2 saveUser"} 
                    value={"SignIn-Up"} onClick={save}
                   />
                    
        </div>
</section>)
}
let mapStateToProps = (state)=>{
   return{prod: state.ProductReducer.product}
}
let mapDispatchToProps = (dispatch)=>{
    return{SaveToStore:(prod)=>dispatch(ProductUpdate(prod))}
}
export default connect(mapStateToProps,mapDispatchToProps)(Product)