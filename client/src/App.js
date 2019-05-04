import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch"
import CharacterChoice from './pages/CharacterChoice'
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          
          <Switch>
            <Route exact path= "/" component={Home} />
            <Route exact path="/characterSelect" component={CharacterChoice} />
            <Route component={NoMatch} />
            
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;