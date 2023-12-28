import React from "react";
export default class Test extends React.Component{
    constructor(props){
        super(props)
        this.state={
            show: true,
            value: ''
        }
    }
    toggle(){
        this.setState({
            show: !this.state.show
        })
    }
    render(){
        return (
        <>
        <button onClick={()=>{this.props.getChildData(this.state.value);this.setState({show:!this.state.show});let val=setInterval(()=>console.log('Set Timeout Words'),1000);setTimeout(()=>clearInterval(val),2000)}}>Pass To Parent</button>
        <input onChange={(e)=>this.setState({value:e.target.value})} style={{display:'block',width:'50%'}} type='text' placeholder="Pass the text for child compnent to pass"></input>
        <div className="box test" style={{display: this.state.show ? 'flex' : 'none' }}>  
        <div className="box-item test">
            <h2>Shopping Cart Application from {this.props.parent}</h2>
        </div>
        <div className="box-item test">
            <h2>{this.props.username}</h2>
            <p>es un tio de putisima madre</p>
        </div>
        </div>
        </>
        )
    }
}