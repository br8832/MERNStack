import React from "react";
import BryanContainer from "./App/BryanContainer";
import Header from "./Header";
import About from "./About"
import Test from "./Test";
import Assess from "./Assess";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
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
            <Header parent={this.state.parent}/>
            <Routes>
                <Route path="/assess" element={<Assess/>}/>  
                <Route path="/bryan" element={<BryanContainer/>}/>
                <Route path="/about" element={<About username={this.state.username}/>}/>
                <Route path="/test" element={<Test username={this.state.username} parent={this.state.parent} getChildData={this.getChildData}/>}></Route>
                <Route path="*" element={<NotFound username={this.state.username} parent={this.state.parent}/>}/>
            </Routes>
        </Router>
    )}
}

export default Application