import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";

export default class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",

    loading: false,
  };

  onInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = () => {
    if (this.state.name && this.state.email && this.state.password) {
      alert("200");
    }
  };

  render() {
    return (
      <MDBContainer style={{ marginTop: "10%" }}>
        <MDBRow center>
          <MDBCol md="5" style={{ minWidth: "380px" }}>
            <form>
              <p className="h4 text-center mb-4">Register</p>
              <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                Your name
              </label>
              <input
                id="defaultFormRegisterNameEx"
                className="form-control"
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.onInputChange}
                required
              />
              <br />
              <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                Your email
              </label>
              <input
                id="defaultFormRegisterEmailEx"
                className="form-control"
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.onInputChange}
                required
              />
              <br />
              <label
                htmlFor="defaultFormRegisterConfirmEx"
                className="grey-text"
              >
                Confirm your email
              </label>
              <input
                id="defaultFormRegisterConfirmEx"
                className="form-control"
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.onInputChange}
                required
              />
              <br />
              <label
                htmlFor="defaultFormRegisterPasswordEx"
                className="grey-text"
              >
                Your password
              </label>
              <input
                id="defaultFormRegisterPasswordEx"
                className="form-control"
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.onInputChange}
                required
              />
              <div className="text-center mt-4 ">
                <MDBBtn
                  className="white-text"
                  color="#212121 elegant-color-dark"
                  type="submit"
                  onClick={this.onSubmit}
                >
                  Register
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}
