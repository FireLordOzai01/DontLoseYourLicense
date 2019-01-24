import React, { Component } from 'react';
import Navbar from './components/navbar/navbar.js';
import './App.css';
import Profile from './components/userProfile/profile';
import SignUp from './components/signUp/signUp';


<<<<<<< HEAD
// import Admin from './components/admin/admin';
// import MoreBooks from './components/books/moreBooks';
=======
//ROUTES
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/home';
import SignUp from './components/signUp/signUp';
import Profile from './components/userProfile/profile';
import LogInForm from './components/login/login';
>>>>>>> 95e356df9aef126892ee21e06dd36777b9417598

class App extends Component {
  render() {
    return (
      <div id="outer-wrapper" className="index home">
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
<<<<<<< HEAD
        {/* <div className="clear"> */}
        {/* </div> */} */}
=======
        <LogInForm />
        <div className="clear">
        </div>
>>>>>>> 95e356df9aef126892ee21e06dd36777b9417598
      </div>
    );
  }
}

export default App;