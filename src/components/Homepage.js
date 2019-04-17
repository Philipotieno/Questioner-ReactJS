import React, { Component } from "react";
import { Link } from "react-router-dom";
class Homepage extends Component {
  render() {
    return (
      <div>
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Questioner App</h1>
                <p className="lead">
                  Welcome to Questioner
                  <br />
                  Questioner helps the meetup organizer prioritize questions to be answered.
                  <br />Other users can vote on asked questions and they bubble to the top or bottom of the log.
                </p>
                <hr />
                <Link to="/login" className="btn btn-lg btns-light">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
