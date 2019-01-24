import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './navbar.css';
import { logoutUser } from '../../actions';

class Navbar extends Component {

    render() {
        return (
            <div>
                <nav id="main-nav">
                    <div className="header-menu row">
                        <ul>
                            <li>
                                <Link className="nav-item" to="/">Home</Link>
                            </li>
                            <li>
                                <Link className="nav-item" to="/fourm">Fourm </Link>
                            </li>
                            <li>

                                <Link className="nav-item" to="/signup">Signup </Link>
                            </li>
                            {this.props.logged
                            ?   
                            <li>
                                <Link 
                                    className="nav-item"
                                    to="/"
                                    onClick={() => this.props.logout(this.props.user, this.props.user.user_id)}>Logout
                                </Link>
                            </li>
                            :
                            <li>
                                <Link className="nav-item" to="/login">Login</Link>
                            </li>
                            }
                        </ul>
                    </div>
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