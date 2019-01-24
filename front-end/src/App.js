import React, { Component } from 'react';
import LogoLogo from './components/logo/logo.js';
import Navbar from './components/navbar/navbar.js';
import './App.css';
import Profile from './components/userProfile/profile';
import SignUp from './components/signUp/signUp';


// import Admin from './components/admin/admin';
// import MoreBooks from './components/books/moreBooks';

class App extends Component {
  render() {
    return (
      <div id="outer-wrapper" className="index home">
        {/* Logo */}
        <LogoLogo />
        {/* Main Menu */}
        <Navbar />
        <div className="clear">
        </div>
        {/* Routes */}
        {/* <Switch> */}
          {/* <Route exact path='/' render={(renderProps) => <Home />} /> */}
          {/* <Route  path='/admin' render={(renderProps) => <Admin /> } /> */}
        {/* </Switch> */}
        {/* <Navbar/> */}
        {/* <SignUp /> */}
        <Profile />
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