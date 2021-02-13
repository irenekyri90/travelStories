import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Private from './pages/Private';
import User from './pages/User';
import UserList from './pages/UserList';

import AnonRoute from './components/AnonRoute';
import PrivateRoute from './components/PrivateRoute';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/user" component={User} />
          <Route exact path="/userlist" component={UserList} />


          <AnonRoute exact path="/signup" component={Signup} />
          <AnonRoute exact path="/login" component={Login} />

          <PrivateRoute exact path="/private" component={Private} />
        </Switch>
      </div>
    );
  }
}

export default App;
