import React from "react";
class Bryan extends React.Component{
    constructor(props){
        super(props)
        this.state ={
        address:"Earth",
        age:1000,
        country:"USA",
        ofAge:this.age > 18
        }
    }    
    render(){
        return (
           <>
           <h1>{this.props.username} from Parent</h1> 
           <ul>
            <li>Address: {this.state.address}</li>
            <li>Age: {this.state.age}</li>
            <li>Country: {this.state.country}</li>
            <li>ofAge: {String(this.state.ofAge)}</li>
           </ul>
           </>
        )

    }
}
export default Bryan