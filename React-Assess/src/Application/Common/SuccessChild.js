// #4
import React from "react";
const SuccessChild = (props)=>{
    console.log(props)
    return (<><h2>From Parent I got</h2>
             <ul>
                <li>{props.name}</li>
                <li>{props.address}</li>
            </ul>
            <h2>Child got another component</h2>
            {props.successStory({change:props.change})}</>
            )
}
export default SuccessChild