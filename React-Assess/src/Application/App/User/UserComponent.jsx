import React from "react"
export default class User extends React.PureComponent{
    constructor(props){
        super(props)
        this.state = {
            userName:props.user.userName, 
            password:props.user.password, 
            street:props.user.street, 
            mobile:props.user.mobile
        }
        // #6
        this.string = React.createRef()
    }
    onTextChange = (evt)=>{
        let target = evt.target;
        let classList = target.classList;//reading the class name of html when change event happens
        let value = target.value;
    
        if(classList.contains("username")){
            this.setState({
                userName : value
            })
        }else if (classList.contains("pass")) {
            this.setState({
                password : value
            })
        } else if (classList.contains("street")) {
            
            this.setState({
                street : value
            })
        } else {
            this.setState({
                mobile : value
            })
        }  
        evt.preventDefault()  
    }

    loginUser = (evt)=>{
        //this.props.AddUser(this.state)
        this.props.LoginUser(this.state)
        evt.preventDefault()
    }
    // #6 uncontrolled
    update = (e) =>{
        const val = this.string.current.value  
        this.setState({string:val}) 
        console.log(this.state.string)
        e.preventDefault() 
    }
    render(){
        return(
            <>
                <h1>User Login Page</h1>
                <section className={"componentClass"}>
                    <div className="form col-md-8">
                        <div className="col-md-12">
                            <b>User Name</b>
                            <input type="text" className="form-control col-md-6 username" 
                                    value={this.state.userName} 
                                placeholder="User Name" onChange={this.onTextChange} maxLength={40}/>
            
                            </div>
                            <div className="col-md-12">
                                    <b>Password</b>
                                    <input type="password" className="form-control col-md-6 pass" value={this.state.password} 
                                        placeholder="Password" onChange={this.onTextChange} maxLength={40}/>
                                </div>
                                <div className="col-md-12">
                                <b>Street </b>
                                    <input type="text" className="form-control col-md-6 street" value={this.state.street} 
                                            placeholder="Street Name" onChange={this.onTextChange} />
                                </div>
                            
                                <div className="col-md-12">
                                    <b>Mobile </b>
                                    <input type="number" className="form-control col-md-6 mobile" value={this.state.mobile} 
                                    placeholder="Mobile" maxLength="11"
                                    onChange={this.onTextChange} />
                                </div>

                                <input type="button" className={"btn btn-primary col-md-2 saveUser"} 
                                        value={"SignIn-Up"} 
                                        onClick={this.loginUser}/>
                                    
                        </div>
                </section>
            
                <div className="col-md-12">
                                    <b>String: {this.state.string} </b>
                                    <input type="number" className="form-control col-md-6 mobile" 
                                    placeholder="Mobile" maxLength="11" ref={this.string}
                                    onChange={this.update} />
                                </div>
            </>
        )
    }
}

//a fallback to use
User.defaultProps = {
    User : {
        userName : "Bryan",
        password : 18,
        street : "Earth",
        mobile : 6565656
    }
}

// //subsciber
// let mapstateToProps = (store)=>{
//     return {
//         User : store.userReducer.User //can be accessed as props.User
//     }
// }

// //publisher
// let mapdispatchToProps = (dispatch)=>{
//     return {
//         AddUser : (newUser)=>{ //can be accessed as props.AddUser
//             dispatch(AddUserToStore(newUser)) //dispatch the action - AddUserToStore
//         }
//     }
// }


//connect component with store to make it access the state as props defined in mapStateToProps
//export default connect(mapstateToProps, null)(User) //to just make subscriber of state

//now component becomes subscirber as well as publisher
//export default connect(mapstateToProps, mapdispatchToProps)(User)
