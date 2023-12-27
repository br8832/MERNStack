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
        <button onClick={()=>{this.props.getChildData(this.state.value);this.setState({show:!this.state.show})}}>Pass To Parent</button>
        <input onChange={(_)=>this.setState({value:e.target.value})} style={{display:'block',width:'50%'}} type='text' placeholder="Pass the text for child compnent to pass"></input>
        <div class="box test" style={{display: this.state.show ? 'flex' : 'none' }}>  
        <div class="box-item test">
            <h2>Shopping Cart Application from {this.props.parent}</h2>
        </div>
        <div class="box-item test">
            <h2>{this.props.username}</h2>
            <p>es un tio de putisima madre</p>
        </div>
        </div>
        </>
        )
    }
}