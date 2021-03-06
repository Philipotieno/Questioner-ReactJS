import React, { Component } from "react";
import Axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const signIndata = {
      email: this.state.email,
      password: this.state.password
    };
    let response;
    Axios({
      url: "https://questioners-two-staging.herokuapp.com/api/auth/login/",
      data: signIndata,
      method: "post"
    })
      .then(res => {
        const {token} = res.data;
        localStorage.setItem('jwtToken', token);
        response = res.data.Message;
        document.getElementById("success").innerHTML += `
            <div class="alert alert-dismissible alert-success">
            <button type="button" class="close" data-dismiss="alert">&times;</button>
             <strong>${response}</strong>
            </div>
            `;
        this.props.history.push('/viewmeetups');
      })
      .catch(error => {
        if (error.response.data["detail"]) {
          response = error.response.data["detail"];
          document.getElementById("success").innerHTML += `
                <div class="alert alert-dismissible alert-warning">
                <button type="button" class="close" data-dismiss="alert">&times;</button>
                <strong>${response}</strong>
                </div>
                `;
        }
      });
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="login-container">
          <div className="row">
            <div className="offset-md-3 col-md-6 offset-md-3">
              <center>
                <h1>LOGIN</h1>
              </center>
              <div id="success" />
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    name="email"
                    placeholder="Enter email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btns btn-lg btn-block btn-outline-success"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Login;
