import React, { Component } from 'react';
import LogoLogo from './components/logo/logo.js';
import Navbar from './components/navbar/navbar.js';
import './App.css';


//ROUTES
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/home.js';
import SignUp from './components/signUp/signUp';
import Profile from './components/userProfile/profile';
import LogInForm from './components/login/login';
import Fourm from './components/fourm/fourm';



class App extends Component {

  render() {
    return (
      <div>
        <div className ="row home_bar">
          <div className ="col-md-12">
            {/* Navbar */}
            <Navbar />
          </div>
        </div>
        <div id="outer-wrapper" className="index home">
          <div className="clear">
          </div>
          {/* Routes */}
          <Switch>
            <Route exact path='/' render={(renderProps) => <Home />} />
            <Route path='/signup' render={(renderProps) => <SignUp />} />
            <Route path='/profile' render={(renderProps) => <Profile />} />
            <Route path='/login' render={(renderProps) => <LogInForm/> } />
            <Route path='/fourm' render={(renderProps) => <Fourm /> } />
            {/* <Route  path='/admin' render={(renderProps) => <Admin /> } /> */}
          </Switch>
          {/* End of Content Wrapper */}
          <div className="clear">
          </div>
      </div>
    </div>
    );
  }
}

export default App;