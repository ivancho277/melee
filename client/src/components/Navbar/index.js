import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import {Component} from "react";
import InstructionModal from "../InstructionsModal";

class Navbar extends Component {

  render(){
  return (
    <div>
      <nav className="nav">
        <InstructionModal />
        <Link className="navbar-brand" to="/characterSelect">
          Choose Character
        </Link>
        
       
<div class="g-signin2" data-onsuccess="onSignIn"></div>
      

        <Link className="navbar-brand" to="/">
          Home
        </Link>

      </nav>

      <div id="title-id"></div>
    </div>
  );
  }
}

export default Navbar;
