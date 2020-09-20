import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import axios from "axios";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",

      loading: false,
    };
    this.baseState = this.state;
  }

  resetState = () => {
    this.setState(this.baseState);
  };

  onInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = () => {
    console.log(this.state);
    this.resetState();
  };

  render() {
    return (
      <MDBContainer style={{ marginTop: "10%" }}>
        <MDBRow center>
          <MDBCol md="5" style={{ minWidth: "380px" }}>
            <form>
              <p className="h4 text-center mb-4">Sign in</p>
              <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                Your email
              </label>
              <input
                type="email"
                id="defaultFormLoginEmailEx"
                className="form-control"
                name="email"
                value={this.state.email}
                onChange={this.onInputChange}
              />
              <br />
              <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                Your password
              </label>
              <input
                type="password"
                id="defaultFormLoginPasswordEx"
                className="form-control"
                name="password"
                value={this.state.password}
                onChange={this.onInputChange}
              />
              <div className="text-center mt-4">
                <MDBBtn
                  className="white-text"
                  color="#212121 elegant-color-dark"
                  onClick={this.onSubmit}
                >
                  Login
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}
