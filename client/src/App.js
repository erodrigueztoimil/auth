import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Register from "./components/Register";
import Login from "./components/Login";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/user/register" component={Register} />
        <Route path="/user/login" component={Login} />
      </Router>
    );
  }
}
