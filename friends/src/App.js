import React from 'react';
import Login from './components/Login'

import {Link, Route, withRouter } from "react-router-dom"

import ProtectedRoute from "./components/ProtectedRoute"
import {getToken} from "./utils/api"

import Account from "./components/Account"
import Logout from "./components/Logout"

import './App.css';

function App() {
  const signedIn = getToken()


  return (
    <div className="App">
      <h1>Authenticated Friends</h1>
      <nav>
        <Link to="/">Home</Link>
        {!signedIn && <Link to="/login">Log In</Link>}
        {signedIn && <Link to="/account">Account</Link>}
        {signedIn && <Link to="/logout">Logout</Link>}
      </nav>

      <Route exact path="/login" component={Login}/>
      <ProtectedRoute exact path="/account" component={Account}/>
      <ProtectedRoute exact path="/logout" component={Logout}/>
    </div>
  );
}

export default withRouter(App);
