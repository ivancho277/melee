import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from "./pages/home";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import AboutCard from "./components/AboutCard"

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar />
          <AboutCard />
      </div>
    );
  }
}

export default App;
