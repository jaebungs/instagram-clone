import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
    </Switch>
  );
}

export default App;
