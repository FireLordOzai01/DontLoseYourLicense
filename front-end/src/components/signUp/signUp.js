import React, { Component } from 'react';
import './signUp.css';
class SignUp extends Component {
    state = { 
        fullName: "",
        email: "",
        companyAffiliation: "",
        userIndustry: "",
        username: "",
        password: "",
        confirmPassword: ""
    }

    match = () => {
        if(this.state.password !== this.state.confirmPassword){
            alert("Passwords don't match");
        } else {
            alert("passwords matche");
        }
    }

    render() { 
        return ( 
            <div className="background-div">
                <div className="container">
                    <div className="container inner-div">
                        <div className="container">
                            <div className="row">
                                <div className="social-media col-md-4 flex-container">
                                <h5>Use a social network to sign up</h5>
                                    <button 
                                        id="facebook"
                                        className="btn btn-primary"
                                        onClick={this.match}
                                        >Sign in with Facebook</button>
                                    <button 
                                        id="google"
                                        className="btn btn-primary"
                                        onClick={this.match}
                                        >Sign in with Google+</button>
                                    <button 
                                        id="linkedin"
                                        className="btn btn-primary"
                                        onClick={this.match}
                                        >Sign in with Linkedin</button>
                                    <button 
                                        id="twitter"
                                        className="btn btn-primary"
                                        onClick={this.match}
                                        >Sign in with Twitter</button>
                                </div>
                            <form>
                                <h3>&nbsp; Sign up to comment, write and receive news by email</h3>
                                <div className="signUpForm">
                                    <div className="container">
                                        <div className="col-md-8">
                                        {/* First Name */}
                                            <div>
                                                <input 
                                                    value={this.state.fullName}
                                                    onChange={e => this.setState({fullName: e.target.value})}
                                                    type="text" className="form-control input" placeholder="Full Name"/>
                                            </div>
                                            {/* Email */}
                                            <div>
                                                <input 
                                                    value={this.state.email}
                                                    onChange={e => this.setState({email: e.target.value})}
                                                    type="email" className="form-control input" placeholder="Email address"/>
                                            </div>
                                            {/* Company Affiliation */}
                                            <div>
                                                <input
                                                    value={this.state.companyAffiliation}
                                                    onChange={e => this.setState({companyAffiliation: e.target.value})}
                                                    type="text" className="form-control input" placeholder="Company Affiliation"/>
                                            </div>
                                            {/* User Industry */}
                                            <div>
                                                <input
                                                    value={this.state.userIndustry}
                                                    onChange={e => this.setState({userIndustry: e.target.value})}
                                                    type="text" className="form-control input" placeholder="User Industry" />
                                            </div>
                                            {/* Username */}
                                                <input
                                                    value={this.state.username}
                                                    onChange={e => this.setState({username: e.target.value})}
                                                    type="text" className="form-control input" placeholder="Username" />
                                            {/* Password */}
                                            
                                            <div className="HOTDOG">
                                                <input
                                                    value={this.state.password}
                                                    onChange={e => this.setState({password: e.target.value})}
                                                    type="password" className="form-control input col-md-5" placeholder="Password" /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                                                {/* Confirm Password */}
                                                <input
                                                    value={this.state.confirmPassword}
                                                    onChange={e => this.setState({confirmPassword: e.target.value})}
                                                    type="password" className="form-control input col-md-5" placeholder="Confirm Password"/>
                                            </div>
                                        </div>
                                    </div>
                                    <button 
                                        className="btn btn-primary signUpButton"
                                        onClick={this.match}
                                        >Submit</button>
                                    </div>
                                </form>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default SignUp;