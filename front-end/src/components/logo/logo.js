import React, { Component } from 'react';
import './logo.css';
import Logo from './../../Assets/Logo.jpg';


class LogoLogo extends Component {
    render() {
        return (
            <div className="header-content row">
                <div className="header-logo">
                    <div className="section" id="header">
                        <div>
                            <div id="header-inner">
                                <img src={Logo} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LogoLogo;