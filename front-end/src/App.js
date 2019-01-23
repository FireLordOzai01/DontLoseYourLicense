import React, { Component } from 'react';

//ROUTES
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/home';


//HOMEPAGE SECTIONS
import LogoLogo from './components/logo/logo.js';
import Navbar from './components/navbar/navbar.js';
import './App.css';
import Profile from './components/userProfile/profile'
// import SignUp from './components/signUp/signUp';

// import Navbar from './components/navbar/navbar';
// import Home from './components/home/home';

<<<<<<< HEAD
// import Admin from './components/admin/admin';
// import MoreBooks from './components/books/moreBooks';
=======
>>>>>>> 394734f9c1f5f44cf0fff237a91736e69ac1096d

class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div id="outer-wrapper" className="index home">
        {/* Logo */}
        <LogoLogo />
        {/* Main Menu */}
        <Navbar />
        <div className="clear">
        </div>
        {/* Routes */}
        <Switch>
          <Route exact path='/' render={(renderProps) => <Home />} />
          {/* <Route  path='/admin' render={(renderProps) => <Admin /> } /> */}
=======
      <div>
        {/* <Navbar/> */}
        <Profile />
        <Switch>
          {/* <Route exact path='/' render={(renderProps) => <Home /> } /> */}
>>>>>>> 394734f9c1f5f44cf0fff237a91736e69ac1096d
        </Switch>
        {/* End of Content Wrapper */}
        <div className="clear">
        </div>
      </div>
    );
  }
}

export default App;
