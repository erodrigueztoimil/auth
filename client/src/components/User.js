import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import Login from "./Login";
import Register from "./Register";

class User extends Component {
  render() {
    return (
      <Switch>
        <Route path={`${this.props.match.url}/login`}>
          <Login />
        </Route>
        <Route path={`${this.props.match.url}/register`}>
          <Register />
        </Route>
      </Switch>
    );
  }
}

export default withRouter(User);
