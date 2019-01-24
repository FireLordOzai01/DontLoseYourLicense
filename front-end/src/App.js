import React, { Component } from 'react';
import Navbar from './components/navbar/navbar.js';
import './App.css';


//ROUTES
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/home';
import SignUp from './components/signUp/signUp';
import Profile from './components/userProfile/profile';
import LogInForm from './components/login/login';

class App extends Component {
  render() {
    return (
      <div id="outer-wrapper" className="index home">
        {/* Main Menu */}
        <Navbar />
        <div className="clear">
          </div>
          {/* Routes */}
          <Switch>
            <Route exact path='/' render={() => <Home />} />
            <Route path='/signup' render={() => <SignUp /> } />
            <Route path='/profile' render={() => <Profile /> } />
            <Route path='/login' render={() => <LogInForm /> } />
          </Switch>
          {/* End of Content Wrapper */}
          <div className="clear">
        </div>
      </div>
    );
  }
}

export default App;