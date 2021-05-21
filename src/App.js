import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import PrivateRoute from './components/PrivateRoute';
import { axiosWithAuth } from './helpers/axiosWithAuth';

import Login from "./components/Login";
import BubblePage from "./components/BubblePage"
import "./styles.scss";

function App() {

  const logout = () => {
    axiosWithAuth().post('/logout')
      .then(res=> {
        localStorage.removeItem("token");
        window.location.href = "/";
      })
      .catch(err=> {
        console.log(err);
      })
    };

  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <Link data-testid="logoutButton" href={logout}>logout</Link>
        </header> 
        <Switch>
          <PrivateRoute path="/bubblePage" component={BubblePage} />
          <Route exact path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute
//2. Build the logout button to remove the localStorage Item.

