import React,{PureComponent} from "react";
// PureComponent implements shouldComponentUpdate
class NotFound extends PureComponent{
    constructor(props){
        super(props)
        this.state={
        //safe
        username: "",
        parent: props.parent
    }
    //unsafe
    this.address= React.createRef(),
    this.age= React.createRef()
    }
    check = (e) =>{
        this.setState({username:e.target.value})
        e.preventDefault()
    }
    submit = (e)=>{
        this.setState({address:this.address.current.value, age:this.age.current.value})
         // this.state.address = address
        // this.state.age = age

        //api to call render method, by skipping life cycle methods - should be avoided
        //this.forceUpdate();

        e.preventDefault()
    }
    // defaults to ALL PROPS AND STATES but we can overwrite it
    // componentWillUnmount - destruction
    // constructor, componentDidMount, render - creation
    // getSnapshotBeforeUpdate,componentDidUpdate,shouldComponentUpdate  -update
    
    // shouldComponentUpdate(nextProps, nextState){
    //    return !(this.state.address==nextState.address && this.state.age==nextState.age) 
    // }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log(prevProps, prevState)
    }
    render(){
        console.log('rendering')
    return(
        <div style={{color: "coral"}}>
            <h1>The Page you're looking for is still under construction!!!</h1>
            <p>{JSON.stringify(this.state)}</p>
            <div className="col-md-12">
            <div className="col-md-8">
            <label>Username</label>
            <input type="text" maxLength="30" value={this.state.username} placeholder="Enter Username" id="username" onChange={this.check}></input>
            <div className="col-md-8">
                <form action="/api/login">
                <input type="text" placeholder={"Default User Address"} ref={this.address} maxLength={20}></input>
                <input type="text" placeholder={"Default User Age"} ref={this.age} maxLength={20}></input>
                <button onClick={this.submit}>Big E</button>
                </form>
            </div>
            </div>
            </div>
        </div>
           )
    }
}

export default NotFound;