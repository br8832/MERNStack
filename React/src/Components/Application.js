import React from "react";
import Bryan from "./Bryan"
import Header from "./Header";
import Test from "./Test";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"
import NotFound from "./NotFound";
class Application extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username: "Bryan Rodriguez",
            parent:"Application"
        }
    }
    getChildData = (data)=>{
        //alert(data)

        this.setState({
            parent : data
        })
    }
    render(){
    return(
        <Router>
            <Header parent={this.state.parent} username={this.state.username}/>
            <Routes>
                <Route path="/bryan" element={<Bryan username={this.state.username}/>}/>
                <Route path="/test" element={<Test username={this.state.username} parent={this.state.parent} getChildData={this.getChildData}/>}></Route>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </Router>
    )}
}

export default Application