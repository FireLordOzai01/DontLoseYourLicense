import React, { Component } from 'react';

//ROUTES
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/home';


//HOMEPAGE SECTIONS
import LogoLogo from './components/logo/logo.js';
import Navbar from './components/navbar/navbar.js';
import './App.css';
import SignUp from './components/signUp/signUp';

// import Navbar from './components/navbar/navbar';
// import Home from './components/home/home';

// import Admin from './components/admin/admin';
// import MoreBooks from './components/books/moreBooks';

class App extends Component {
  render() {
    return (
      <div id="outer-wrapper" className="index home">
        {/* Logo
        <LogoLogo />
        {/* Main Menu */}
        {/* <Navbar /> */}
        {/* <div className="clear"> */}
        {/* </div> */}
        {/* Routes */}
        {/* <Switch> */}
          {/* <Route exact path='/' render={(renderProps) => <Home />} /> */}
          {/* <Route  path='/admin' render={(renderProps) => <Admin /> } /> */}
        {/* </Switch> */}
        {/* <Navbar/> */}
        <SignUp />
        {/* <Switch> */}
          {/* <Route exact path='/' render={(renderProps) => <Home /> } /> */}
        {/* </Switch> */}
        {/* End of Content Wrapper */}
        {/* <div className="clear"> */}
        {/* </div> */} */}
      </div>
    );
  }
}

export default App;
