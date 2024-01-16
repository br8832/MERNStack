import React from "react";
//5, 8
const SuccessStory = (props)=>{
    console.log(props)
    setTimeout(()=>props.change(Math.random()),10000)
    return (<><h3>HI FROM SUCCESSSTORY</h3>
            <p>I'm being passed around</p></>)
}
export default SuccessStory