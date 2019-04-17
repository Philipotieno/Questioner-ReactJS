import React, { Component } from 'react';
import axios from 'axios';
// import "../css/bootstrap.css";

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
        const logindata = {
          email: this.state.email,
          password: this.state.password
        };
        console.log(logindata);
        axios({
            url:"https://questioners-two-staging.herokuapp.com/api/auth/login/",
            method:'post',
            data: logindata

        })
        .then(res => {
            alert(res.data.Message)
    
        })
        .catch(error=>{
            if (error) {
                alert(error.response.data["detail"]);   
            }
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input
                            type="email" 
                            className="form-control" 
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp" 
                            name="email" 
                            placeholder="Enter email" 
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input 
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            name="password" 
                            placeholder="Password" 
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default Login;
