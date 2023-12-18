import React from "react";
import Bryan from "./Bryan"
import Header from "./Header";
let Application = ()=>{
    let a = 10, b = 5;
    return(
        <>
            <Header/>
            <b>The Arithmatic Operation {a+b} {a*b} {a-b} {a/b}</b>
            <h1>This is the Application Component</h1>
            <Bryan/>
        </>
    )
}

export default Application