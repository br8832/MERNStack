//console.log("Shopping Cart Application - To be Built on React will be loaded through this file!!!")
//alert("Index js file loaded")

import React from "react";
import * as ReactDOM from "react-dom/client";
import Application from "./Components/Application";
import './index.css';
//creating root of the react application where we can load the react app
const root = ReactDOM.createRoot(document.getElementById("root"));

//bootstrapping react application in root element of index.html
root.render( //this creates the virtual dom (copy of actual dom in js object format)
    <Application />
)