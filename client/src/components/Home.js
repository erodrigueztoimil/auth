import React, { Component } from "react";

export default class Home extends Component {
  state = {
    name: "",
  };

  componentDidMount() {
    this.setState({ name: JSON.parse(localStorage.getItem("token")).name });
  }

  onBttnClick = () => {
    localStorage.removeItem("token");
    this.props.history.push("/user/login");
  };

  render() {
    return (
      <div>
        <h1>Hello {this.state.name}</h1>
        <button onClick={this.onBttnClick}>Log Out</button>
      </div>
    );
  }
}
