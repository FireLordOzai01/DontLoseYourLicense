import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { getUserToken } from '../../actions';

class LogInForm extends Component {
    state = {
        username: '',
        password: '',
        redirect: false
    }

    onLogIn = e => {
        e.preventDefault();
        let user = {
            username: this.state.username,
            password: this.state.password
        };

        this.props.logIn(user);
        this.setState({ redirect: true });
    }

    render() {
        return (
            this.state.redirect
            ? <Redirect to='/profile'/>
            :
            <div className="container">
                <h2 className="mt-3">Log In</h2>
                <form>
                    <div className="form-group">
                        <label>Username</label>
                        <input  type="text" 
                                className="form-control" 
                                placeholder="Enter username" 
                                value={this.state.username}
                                onChange={(e) => this.setState({ username: e.target.value })}/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input  type="password" 
                                className="form-control"  
                                placeholder="Enter password"
                                value={this.state.password}
                                onChange={(e) => this.setState({ password: e.target.value })}/>
                    </div>
                    <button 
                        className="btn btn-outline-primary float-right mt-3 mb-4"
                        onClick={(e) => this.onLogIn(e)}>Log In</button>
                </form>
            </div>
        );
    }
}

const mapPropsToDispatch = dispatch => ({
    logIn: user => (dispatch(getUserToken(user)))
});


export default connect(null, mapPropsToDispatch)(LogInForm);