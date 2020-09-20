import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import User from "./components/User";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/user" component={User} />
        </Switch>
      </Router>
    );
  }
}
