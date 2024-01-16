import React from "react";
//9, 10
export default class LifeCycle extends React.Component{
    constructor(props){
        super(props) // get props
        this.state={value1:0, value2:1, buttonval:"2"}// note button val default to 2
        this.interval = setInterval(()=>console.log("called by set Interval"),19000)
    }
    // Pure Component implements a shallow comparison
    // Component defaults to true
    shouldComponentUpdate(_,nextState){
        return !(this.state.value1==nextState.value1 && 
        this.state.value2==nextState.value2 && 
        this.state.buttonval==nextState.buttonval)
    }
    // when it mounts can reference HTML elemnts
    componentDidMount(){
        console.log("here you can get HTML elements")
        this.input1 = document.getElementById("input1")
        console.log(this.input1)
    }
    // for clearing your intervals
    componentWillUnmount(){
        console.log("clear your set intervals")
        clearInterval(this.interval)
    }
    componentDidUpdate(prevProps,prevState){
       //console.log(prevProps); console.log(prevState)
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        //console.log(prevProps); console.log(prevState)
        return {prevProps,prevState}
    }
    check = (e)=>{
        let val=e.target.value    
        switch(e.target.id){
            case "input1":
                this.setState({value1:val})
                break
            case "button":
                val="string"
                this.setState({buttonval: "string"})
                break;// the duplicate state
            default:
                this.setState({value2:val})    
        }
        e.preventDefault()
    }
    render(){
        console.log("render")
        return(<>
        <h1>HEre is button value:{this.state.buttonval}</h1>
        <h2>{JSON.stringify(this.state)}</h2>
        <input type="text" id="input1" onChange={this.check} maxLength={35} placeholder="Text1" value={this.state.value1}></input>
        <input type="text" id="input2" onChange={this.check} maxLength={35} placeholder="Text2" value={this.state.value2}></input>
        <input type="button" id="button" onClick={this.check} value="Click me"></input>
        </>)
    }
}