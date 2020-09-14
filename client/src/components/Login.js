import React, { Component } from "react";

export default class Login extends Component {
  state = {
    email: "",
    password: "",

    loading: false,
  };

  onInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return <div>Login</div>;
  }
}
