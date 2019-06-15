import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer"

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Homepage />
        <Footer />
      </div>
    );
  }
}

export default App;
