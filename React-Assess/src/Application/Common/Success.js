// QUESTION 3
import React from "react";
import SuccessChild from "./SuccessChild";
import SuccessStory from "./SuccessStory";
import Product from "./Prouct";
export default class Success extends React.Component{
    constructor(props){
        super(props)
        this.state={
            quote1:"THis is a quote",
            quote2:"Second Quote",
            num:1}
    }
    change = (num) =>{
        this.setState({num})
    }
    render(){
        return(<>
            <h1>ASSESMENT STUFF</h1>
            <ul>
                <li>{this.state.quote1}</li>
                <li>{this.state.quote2}</li>
                <li>{this.state.num}</li>
            </ul>
            <Product name={"Texh"} price={12}></Product>
            <SuccessChild change={this.change} successStory={SuccessStory} name="Bryan" address="Earth"></SuccessChild> 
        </>)
    }
}