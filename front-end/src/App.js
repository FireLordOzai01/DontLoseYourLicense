import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Profile from './components/userProfile/profile';
// import SignUp from './components/signUp/signUp';

// import Navbar from './components/navbar/navbar';
// import Home from './components/home/home';

<<<<<<< HEAD
// import Admin from './components/admin/admin';
// import MoreBooks from './components/books/moreBooks';
=======
>>>>>>> 8cbadeeddb3b0002246def401643aee8ac76e554

class App extends Component {
  render() {
    return (
<<<<<<< HEAD
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
=======
      <div>
        {/* <Navbar/> */}
        <Profile />
        {/* <SignUp /> */}
        <Switch>
          {/* <Route exact path='/' render={(renderProps) => <Home /> } /> */}
        </Switch>
>>>>>>> 8cbadeeddb3b0002246def401643aee8ac76e554
      </div>
    );
  }
}

export default App;
