import React, { Component } from 'react';
import './signUp.css';
class SignUp extends Component {
    state = { 
        username: "",
        password: "",
        confirmpassword: ""
    }

    match = () => {
        if(this.state.password !== this.state.confirmpassword){
            alert("Passwords don't match");
        } else {
            alert("passwords matche");
        }
    }

    render() { 
        return ( 
            <div>
                <form className="form-inline">
                    <div className="signUpForm">
                        <h5 id="text-in-form">Sign Up</h5>
                        {/* Username */}
                        <label>Create Username</label>
                        <input 
                            value={this.state.username}
                            onChange={e => this.setState({username: e.target.value})}
                            type="text" className="form-control" />
                        {/* Password */}
                        <label>Create Password</label>
                        <input
                            value={this.state.password}
                            onChange={e => this.setState({password: e.target.value})}
                            type="password" className="form-control" />
                        {/* Confirm Password */}
                        <label>Confrim Password</label>
                            <input
                                value={this.state.confirmpassword}
                                onChange={e => this.setState({confirmpassword: e.target.value})}
                                type="password" className="form-control" />
                    </div>
                </form>
                <button 
                    className="btn btn-primary signUpButton"
                    onClick={this.match}
                    >Submit</button>
            </div>
         );
    }
}
 
export default SignUp;