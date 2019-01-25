import React, { Component } from 'react';
import './signUp.css';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { addUser } from '../../actions';

class SignUp extends Component {
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
        redirect: false
    }
    
    matchPasswords = (e) => {
        e.preventDefault();
        if (this.state.user.password !== this.state.confirmPassword) {
            alert("Passwords don't match");
        }
        this.props.onAddUser(this.state.user);
        this.setState({ redirect: true });
    }

    render() {
        return (
            this.state.redirect
            ? <Redirect to='/profile'/>
            :
            <div className="background-div">
                <div className="the-div-before-container">
                    <div className="container inner-div">
                        <div className="container">
                            <div className="row">
                                <div className="social-media col-md-4 flex-container">
                                <h4>Sign up with a social network</h4>
                                    <div className="combo ">
                                        <img
                                            src={"https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Facebook_logo_36x36.svg/2000px-Facebook_logo_36x36.svg.png"} alt="" 
                                            className="icon"
                                            onClick={this.facebook}
                                            /> &nbsp; &nbsp; &nbsp;
                                        <img
                                            src={"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Google_Plus_logo.svg/1027px-Google_Plus_logo.svg.png"} alt="" 
                                            className="icon"
                                            onClick={this.google}
                                            />
                                    </div>
                                    <div className="combo ">
                                        <img
                                            src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEUAm9z///8AmNt/wukAldoAl9seo99Lr+OGxuq73/MGoN7H5fb6/v/h8vrc7PgAk9ru+f1Lq+Fhs+TV6/hsuebk8/u02/KXzOxftuVxvees1/Cl0+/g7vnP6Pcsp+A9q+GRy+z1LEjiAAAEZElEQVR4nO3c53LiMBQFYCQk0xzw0ju8/1MuIZnMAroG+2ojHeacmfyKi77IRc3pdG3nnWO7HQrBQyF+KMQPhfihED8U4odC/FCIHwrxQyF+KMQPhfihED8U4odC/FCIHwrxQyF+KMQPhfihED8U4odC/FCIHwrxQyF+KMRPNKH1zvnLT3Z/rkhC59fbcVVWi1F36PSHi5koQutXpfnJ6JiVMYbQ9Spzk9UkStniJILQdc19Rj5O6WJELwwAjTnkc6GqhbYXABqzzYaoFroqKDS9XF4bWqFfhYFmkUslqoVCFRqzzqQSlUK7loBmkEklKoV+Kwqr9xC6mSg08QqpilI4EW/DbJ6mWmEpC+fvIaypw0weptr78EMWHuOVUhPts3QgC9/jWWpDze6vzN5D2OmIwm4mPSit0C0FYJnHcyZCHQ4FYT+TKtQLfT8I/MjkLozSxx+FrtFhpPLpE2Oc5vAIPOZyF0Yaa9vdARfDfIBxxktdb/9vBfazuQc/E2fM27re4LsNPuvaXJ6iX4k1b2GdO06n05PPbuIi5tyTvSTSoSKGs2v4oRA/FP52rPXeee/jPZVzEnrninn3vNutzv1Nr7hIo7yp1cLLHz2Uu62ebmTdsH+4HZtcLDeFUzeQ9POHm34o59vuUxHcqF/8HMX1Hnso135mX9sI1M8f7oMlM8W/GwnTqObP96ldr2ZUcqUz6oXCzEUDoe3UjEleUm40nZUMhP5+KcdjBopaTC90m2e+SxYphWOd0IVHsh6IrWtRLxSeES8Kg2tVQmk9hJ5Y6IVfBNJ2/UpiYadm/vE+LWfr0gqL8Gs+nJYLA9IKpcU44bSbKEgrbJbq7YVm06akeuHi94SzNutW1cLJLwpNm/keLGGbZ41eKDSb/4uwzcJcLGGbqXMsoTk1L2suwsVytVmv56tBfV+xxY2Yh3BbuM8BRPv54c26ZkDDbDGF45vPbOzkLG/aog+VgfBhMXFNn7Fq/s7XC4X+z8vCw2OhJ/LK4xRXqVJYhg7qxW5jEdq8NsmFweVvTrwVmy88Ti0swzeWtJasxcJjvVAoyovCXfjGmkgr5JsXNrVQuOrET3Gav/ITC0vh/Wbnwg4rNKHYWTgKO+wav/ITC+UCCzs0HzVNLBTPbYWmUvOGaWLhVDq39E3cEk0orkOVBriafxGXWCgOLUmDlAmETiWUDytM2sEJxVNnJPQqoXyVCs22NxKGvgBII7QUXjdCFkrNKwoppPDlUPg00pgRhRRS+HLUwoLC61mQhdKwH4UUUvhyKHy6/4nC61YUPiQjoVR2Cimk8PUSUvhs/ymF160ofAiFDUqoFUpLeyikkMLXS0jhs/3npgzlTniqPkKpZOF2Pw5kL6xHrSuhepY7/D897gviwpGPK+yQYCV79qEQPxTih0L8UIgfCvFDIX4oxA+F+KEQPxTih0L8UIgfCvFDIX4oxA+F+KEQPxTih0L8UIgfCvFDIX4oxA+F+KEQPxTih0L82O5fZZxHNsksUxgAAAAASUVORK5CYII="} alt="" 
                                            className="icon"
                                            onClick={this.linkedin}
                                            /> &nbsp; &nbsp; &nbsp;
                                        <img
                                            src={"https://upload.wikimedia.org/wikipedia/fr/thumb/c/c8/Twitter_Bird.svg/1259px-Twitter_Bird.svg.png"} alt="" 
                                            className="icon"
                                            onClick={this.twitter}
                                            /> 
                                    </div>                                      
                                </div>
                                <form>
                                    <h3>&nbsp; Sign up to comment, write and receive news by email</h3>
                                    <div className="signUpForm">
                                        <div className="container">
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
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    onAddUser: (user) => (dispatch(addUser(user)))
})


export default connect(null,mapDispatchToProps)(SignUp);