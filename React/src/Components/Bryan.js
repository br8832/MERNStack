import React from "react";
class Bryan extends React.Component{
    constructor(props){
        super(props);
        this.name="Bryan"
        this.address="Earth"
        this.age=1000
    }    
    render(){
        return (
           <>
           <h1>{this.name}</h1> 
           <ul>
            <li>Address: {this.address}</li>
            <li>Age: {this.age}</li>
           </ul>
           </>
        )

    }
}
export default Bryan