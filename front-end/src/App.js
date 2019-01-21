import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import SignUp from './components/signUp/signUp';

// import Navbar from './components/navbar/navbar';
// import Home from './components/home/home';


class App extends Component {
  render() {
    return (
      <div>
        {/* <Navbar/> */}
        <SignUp />
        <Switch>
          {/* <Route exact path='/' render={(renderProps) => <Home /> } /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
