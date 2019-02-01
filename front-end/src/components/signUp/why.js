import React, { Component } from 'react';
import './why.css';


class Why extends Component {
    state = {
        user: {
            username: "",
            email: "",
            password: "",
            company_affiliation: "",
            user_industry: "",
            real_name: "",
            avatar: ""
        },
        confirmPassword: "",
        redirect: false,
        subscribed: true
    }
    render() { 
        return ( 
            <div className="background">
                <div className="overlay">
                <form>
                    <h3>&nbsp; Sign up to comment, write and receive news by email</h3>
                    <div className="">
                        <div className="">
                            <div className="col-md-8">
                                {/* Full Name */}
                                <div>
                                    <input
                                        value={this.state.user.real_name}
                                        onChange={e => this.setState({ ...this.state, user: { ...this.state.user, real_name: e.target.value} })}
                                        type="text" className="form-control input" placeholder="Full Name" />
                                </div>
                                {/* Email */}
                                <div>
                                    <input
                                        value={this.state.user.email}
                                        onChange={e => this.setState({ ...this.state, user: { ...this.state.user, email: e.target.value } })}
                                        type="email" className="form-control input" placeholder="Email address" />
                                </div>
                                {/* Company Affiliation */}
                                <div>
                                    <input
                                        value={this.state.user.company_affiliation}
                                        onChange={e => this.setState({ ...this.state, user: { ...this.state.user, company_affiliation: e.target.value } })}
                                        type="text" className="form-control input" placeholder="Company Affiliation" />
                                </div>
                                {/* User Industry */}
                                <div>
                                    <input
                                        value={this.state.user.user_industry}
                                        onChange={e => this.setState({ ...this.state, user: { ...this.state.user, user_industry: e.target.value} })}
                                        type="text" className="form-control input" placeholder="User Industry" />
                                </div>
                                {/* Username */}
                                <input
                                    value={this.state.username}
                                    onChange={e => this.setState({ ...this.state, user: { ...this.state.user, username: e.target.value } })}
                                    type="text" className="form-control input" placeholder="Username" />
                                {/* Password */}

                                <div className="HOTDOG">
                                    <input
                                        value={this.state.user.password}
                                        onChange={e => this.setState({ ...this.state, user: { ...this.state.user, password: e.target.value } })}
                                        type="password" className="form-control input col-md-5" placeholder="Password" /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                {/* Confirm Password */}
                                    <input
                                        value={this.state.confirmPassword}
                                        onChange={e => this.setState({ confirmPassword: e.target.value })}
                                        type="password" className="form-control input col-md-5" placeholder="Confirm Password" />
                                </div>
                                <h1>subscribe</h1>
                                <input  type="checkbox" 
                                checked={this.state.subscribed}
                                onClick={() => this.setState({
                                    subscribed: !this.state.subscribed
                                })}
                                />
                            </div>
                        </div>
                        <button
                            className="btn btn-primary signUpButton"
                            onClick={(e)=>this.matchPasswords(e)}
                        >Submit</button>
                    </div>
                </form>
                </div>
            </div>
         );
    }
}
 
export default Why;