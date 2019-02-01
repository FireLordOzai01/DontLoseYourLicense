import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './navbar.css';
import { logoutUser } from '../../actions';
import LogoLogo from './../logo/logo';

class Navbar extends Component {

    render() {
        return (
            <div className="nav-container">
                <nav id="main-nav">
                    <Link id="logo-hover" to="/"><LogoLogo /></Link>
                    <Link className="nav-item" to="/">Home</Link>
                    <Link className="nav-item" to="/fourm">Forum </Link>
                    <Link className="nav-item" to="/signup">Signup </Link>
                    {this.props.logged
                            ?                             
                                <Link 
                                    className="nav-item logout"
                                    to="/"
                                    onClick={() => this.props.logout(this.props.user, this.props.user.user_id)}>Logout
                                </Link>
                            :                           
                                <Link className="nav-item" to="/login">Login</Link>                          
                            }
                </nav>
            </div>
        )
    };
}

const mapStateToProps = state => ({
    user: state.loggedUser,
    logged: state.isLogged
});

const mapPropsToDispatch = dispatch => ({
    logout: (user, id) => dispatch(logoutUser(user, id))
})

export default connect(mapStateToProps, mapPropsToDispatch)(Navbar);