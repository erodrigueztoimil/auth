import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Login from "./Login";
import Register from "./Register";

export default class User extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </div>
    );
  }
}
