import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import Admin from './components/admin/admin';
import MoreBooks from './components/books/moreBooks';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Switch>
          <Route exact path='/' render={(renderProps) => <Home /> } />
          <Route  path='/more-books' render={(renderProps) => <MoreBooks /> } />
          <Route  path='/admin' render={(renderProps) => <Admin /> } />
        </Switch>
      </div>
    );
  }
}

export default App;
