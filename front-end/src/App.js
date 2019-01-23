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
          <Route exact path='/' render={(renderProps) => <Home />} />
          <Route  path='/signup' render={(renderProps) => <SignUp /> } />
          <Route  path='/profile' render={(renderProps) => <Profile /> } />

        </Switch>
        {/* End of Content Wrapper */}
        <LogInForm />
        <div className="clear">
        </div>
      </div>
    );
  }
}

export default App;