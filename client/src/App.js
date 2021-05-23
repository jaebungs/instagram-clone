import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Intersection from './components/Intersection';
import Success from './components/Success';
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
      {/* <Route exact path="/intersection">
        <Intersection />
      </Route> */}
      <Route path="/success">
        <Success />
      </Route>
    </Switch>
  );
}

export default App;
