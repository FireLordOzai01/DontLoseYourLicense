import React, { Component } from 'react';
import { connect } from 'react-redux'
import './profile.css';

class Profile extends Component {
    state = {

    }
    render() {
        return (
            <div className="profile-container container">
                <div className="row1">
                    <img classname="Profile-pic" src="https://media.licdn.com/dms/image/C5603AQGfmyW1kozVdw/profile-displayphoto-shrink_200_200/0?e=1552521600&v=beta&t=8g-n8obltWx0lFBXyj3-oeckviWZO7VgQJcpXzDodDI" alt="profile" />
                    <hr />
                    <h5>COMPANY</h5>
                    {/* {this.props.users.map((user, index) => {
                        return (
                            <div key={index}>
                                <p>{user.}</p> <p>ACME Labs</p>
                            </div>
                        )
                    })} */}
                    <p>ACME Labs</p>
                    <hr />
                    <h5>INDUSTRY</h5>
                    {/* {this.props.users.map((user, index) => {
                        return (
                            <div key={index}>
                                <p>{user.}</p> <p>Dispensary</p>
                            </div>
                        )
                    })} */}
                    <p>Dispensary</p>
                </div>
                <div className="row2">
                {/* {this.props.users.map((user, index) => {
                    return (
                        <div key={index}>
                            <h2>{user.}</h2> <h2>Thomas Anderson</h2>
                            <p>{user.}</p> <p>Santa Ana, Ca</p>
                        </div>
                    )
                })} */}
                    <h2>Thomas Anderson</h2>
                    <p>Santa Ana, Ca</p>
                    <hr />
                    <h5>About</h5>
                {/* {this.props.users.map((user, index) => {
                    return (
                        <div key={index}>
                            <h2>Member since {user.}</h2> <p>Member since February 2019</p>
                            <p>Email: {user.}</p> <p>Email: t.anderson@mysite.com</p>
                            <p>Site: {user.}</p>  <a href="https://www.linkedin.com/in/brian-canlas-57445813b">mysite
                            <p>Posts and replies: {user.} </p>
                            <p>Last Logged in: {user.} </p>
                        </div>
                    )
                })} */}
                    <p>Member since February 2019</p>
                    <p>Email: t.anderson@mysite.com</p>
                    <p>Site: <a href="https://www.linkedin.com/in/brian-canlas-57445813b">mysite</a></p>
                    <p>Posts and replies: 12</p>
                    <p>Last log in: February 10, 2019</p>
                    <hr />
                    {/* {this.props.users.map((user, index) => {
                    return (
                        <div key={index}>
                            <h2>{user.}</h2> <h2>Thomas Anderson</h2>
                            <p>{user.}</p> <p>Santa Ana, Ca</p>
                        </div>
                    )
                })} */}
                    <h5>Posts and Comments</h5>
                {/* {this.props.users.map((user, index) => {
                    return (
                        <div key={index}>
                            <p>{user.}</p> <p>Santa Ana, Ca</p>
                        </div>
                    )
                })} */}
                </div>


            </div>
        );
    }
}

const mapStateToProps = state => ({
    
})

export default connect(mapStateToProps)(Profile);



