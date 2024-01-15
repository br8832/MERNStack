import React from "react";
// this componenet both reads and updates BryanReducer.ME which is exactly the state structure
class Bryan extends React.PureComponent{
    constructor(props){
        super(props)
        console.log(props)
        this.keepProps=props
        this.state = props.ME 
    } 
    check = (e) =>{
        console.log(e)
        let val = e.target.value
        switch(e.target.id){
            case "username":
                this.setState({username:val})
                console.log("username")
                break;
            case "age":
                this.setState({age:val, ofAge:val > 18})
                console.log("age")
                break;
            default:
                this.setState({country:val})
                console.log("default - country")
        }
        e.preventDefault()
       
    }   
    // Note these 2 use the names in mapDispatchToProps
    // here we update(publish) the this.state===BryanReducer.Me
    submit = (e) =>{
        this.props.Change(this.state)
        e.preventDefault()
    }
    // here we reset it
    reset = (e)=>{
        this.props.Reset()
        e.preventDefault()
    }
    render(){
        return (
           <>
           <h1 style={{fontSize:"0.21em"}}>{JSON.stringify(this.keepProps)} from Store</h1> 
           <ul>
            <li>username: {this.state.username}</li>
            <li>Age: {this.state.age}</li>
            <li>Country: {this.state.country}</li>
            <li>ofAge: {String(this.state.ofAge)}</li>
           </ul>
           <form action="/api/login">
           <input type="text" maxLength="30" value={this.state.username} placeholder="Enter Username" id="username" onChange={this.check}></input>
           <input type="text" maxLength="30" value={this.state.age} placeholder="Enter Age" id="age" onChange={this.check}></input>
           <input type="text" maxLength="30" value={this.state.country} placeholder="Enter Country" id="country" onChange={this.check}></input>
           <button onClick={this.submit}>Big E</button>
           <button onClick={this.reset}>reset</button>
           </form>
           </>
        )
    }
}
// Bryan.defaultProps = {
//     username:"Different",
//     address: "1045",
//     age:0,
//     country:"USA",
//     ofAge:false
// }
export default Bryan