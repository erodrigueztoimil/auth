import React, { Component } from "react";

export default class Register extends Component {
  onInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return <div>Register</div>;
  }
}
