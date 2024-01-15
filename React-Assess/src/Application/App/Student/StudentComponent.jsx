import React from "react";
export default class Student extends React.PureComponent{
    constructor(props){
        super(props);
        this.state=props.Student
}
    onTextChange = (e) =>  {
        let val = e.target.value
        switch (e.target.id) {
            case "username":
                this.setState({userName:val})
                break;
            case "pwd":
                this.setState({pwd:val})
                break;
            case "street":
                this.setState({street:val})
                break;
            case "mobile":
                this.setState({mobile:val})
                break;
            default:
                this.setState({session:val})
                break;
        }
        e.preventDefault()
    }
    loginUser = (e)=>{
        this.props.saveStudent(this.state)
        e.preventDefault()
    }
    
    render(){
        return(<><h1>User Login Page</h1>
        <section className={"componentClass"}>
            <div className="form col-md-8">
                <div className="col-md-12">
                    <b>User Name</b>
                    <input type="text" className="form-control col-md-6 username" value={this.state.userName} 
                        id="username" placeholder="User Name" onChange={this.onTextChange} maxLength={40}/>
    
                    </div>
                    <div className="col-md-12">
                            <b>Password</b>
                            <input type="password" className="form-control col-md-6 pass" value={this.state.pwd} 
                                id="pwd" placeholder="Password" onChange={this.onTextChange} maxLength={40}/>
                        </div>
                        <div className="col-md-12">
                        <b>Street </b>
                            <input type="text" className="form-control col-md-6 street" value={this.state.street} 
                                    id="street" placeholder="Street Name" onChange={this.onTextChange} />
                        </div>
                    
                        <div className="col-md-12">
                            <b>Mobile </b>
                            <input type="number" className="form-control col-md-6 mobile" value={this.state.mobile} 
                            id="mobile" placeholder="Mobile" maxLength="11"
                            onChange={this.onTextChange} />
                        </div>
                        <div className="col-md-12">
                            <b>session </b>
                            <input type="text" className="form-control col-md-6 mobile" value={this.state.session} 
                            id="session" placeholder="Session" maxLength="11"
                            onChange={this.onTextChange} />
                        </div>
                        <input type="button" className={"btn btn-primary col-md-2 saveUser"} 
                                value={"SignIn-Up"} 
                                onClick={this.loginUser}/>
                            
                </div>
        </section></>)
    }
}