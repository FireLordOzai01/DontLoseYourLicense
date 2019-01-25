import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

import LogoLogo from './../logo/logo';



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
                                <Link className="nav-item" to="/login">Login</Link>
                            </li>
                            <li>
                                <Link className="nav-item" to="/signup">Signup </Link>
                            </li>
                            <li>
                                <Link className="nav-item" to="/fourm">Forum </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    };
}
export default Navbar;