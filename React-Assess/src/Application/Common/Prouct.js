import React from "react";
// #7
export default class Product extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:props.name,
            price:props.price
        }
    }
    render(){
        return(<>
            <h1>product infto from parent </h1>
            <ul>
                <li>{this.state.name}</li>
                <li>{this.state.price}</li>
            </ul>
        </>)
    }
}