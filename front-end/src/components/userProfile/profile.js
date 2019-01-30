import React, { Component } from 'react';
import { connect } from 'react-redux'
import './profile.css';
import UploadPhoto from '../uploadPhoto/uploadPhoto';

class Profile extends Component {
    state = {
        avatar: '',
        active_date: ''
    }

    // getActiveDate = () => {
    //     let activeTime = this.props.users.active_date;
    //     activeTime = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(activeTime);
    //     return activeTime;
    // }

    // getCreationDate = () => {
    //     let creationTime = this.props.users.creation_date;
    //     creationTime = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(creationTime);
    //     return creationTime;
    // }

    render() {
        return (
            <div className="profile-container container">
                <div className="row1">
                    {this.props.users.avatar != ""
                    ? <img classname="profile-pic" src={this.props.users.avatar}alt="profile" />
                    : <UploadPhoto /> }
                    <hr />
                    <h5>COMPANY</h5>
                    <p>{this.props.users.company_affiliation}</p>
                    <hr />
                    <h5>INDUSTRY</h5>
                    <p>{this.props.users.user_industry}</p>
                </div>
                <div className="row2">
                    <h2>{this.props.users.username}</h2>
                    <hr />
                    <h5>About</h5>
                    <p>Member since: {this.props.users.creation_date}</p>
                    <p>Email: {this.props.users.email} </p>
                    <p>Posts and replies: 12</p>
                    <p>Last log in: {this.props.users.active_date} </p>
                    <hr />
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
    users: state.loggedUser
});

export default connect(mapStateToProps)(Profile);



