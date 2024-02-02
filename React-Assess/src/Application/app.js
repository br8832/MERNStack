import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./app.css";

import HeaderComponent from "./Common/Header";
import Footer from "./Common/Footer";
import NotFound from "./Common/NotFound";
import Home from "./Common/Home";
import About from "./Common/About";
// import Success from "./Common/Success";
// import UserComponent from "./App/User/UserComponent";
// import User from  "./App/User/UserContainer"
// import Student from "./App/Student/StudentContainer"
// import LifeCycle from "./Common/LifeCycle";
import ProductHook from "./App/Product/ProductHook"
import UserHook from "./App/User/UserHook";
import CartHook from "./App/Cart/CartHook";
import Checkout from "./Common/Checkout";
import CouponHook from "./App/Coupon/CouponHook";
import RecentOrders from "./App/RecentOrders/RecentOrders";



export default class ApplicationComponent extends Component {

    constructor(props){ //props - is used to pass information from parent to child component
        super(props); //this is used to push back updated state in parent components

        this.state = { //state is tightely coupled with react renderer and reads the change to recreate virtual dom
            name : "Khan Tran",
            header : "10,001+ employees · UI Specialist"
        }
    }

    //get data from child component using callback function
    getChildData = (data)=>{
        //alert(data)

        this.setState({
            name : data
        })
    }

    //this method returns virtual dom on every change of state using this.setState
    render(){ //life cycle method of React.Component base class, generated virtual dom on state change
        return(
            <Router>
                <HeaderComponent header={this.state.header} name={this.state.name} getChildData={this.getChildData}/>
                <Routes>
                    <Route path="/" element={<Home userName={"Jonathan"}/>}/>
                    <Route path="/coupon" element={<CouponHook/>}/>
                    <Route path="/recent" element={<RecentOrders/>}/>
                    <Route path="/user" element={<UserHook/>} />
                    <Route path="/checkout" element={<Checkout/>} />
                    <Route path="/cart" element={<CartHook/>} />
                    <Route path="/product" element={<ProductHook/>}/>
                    <Route path="/about" element={<About/>} />
                    <Route path="*" element={<NotFound/>} />
                </Routes>
                <Footer />
            </Router>
        )
    }
}