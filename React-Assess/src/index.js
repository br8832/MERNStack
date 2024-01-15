import React from "react";
import * as ReactDOM from "react-dom/client";
import { Provider } from "react-redux"

import store from "./State/store";// provides redux state as props for components
import Application from "./Application/app";

//creating root of the react application where we can load the react app
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Provider store={store} >
        <Application />
    </Provider>
)