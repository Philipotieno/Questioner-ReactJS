import React from "react";
import ReactDom from "react-dom";
import { Route, BrowserRouter as Router } from 'react-router-dom';
import App from "./App";
import Login from "./components/Login";
import Meetups from "./components/Meetups";
import "./styles/bootstrap.css";
import "./styles/styles.css";


const routing = (
    <Router>
        <div>
            <Route exact path="/" component={App}/>
            <Route path="/login" component={Login}/>
            <Route path="/viewmeetups" component={Meetups}/>
        </div>    
    </Router>
)



ReactDom.render(routing,document.getElementById('app'));