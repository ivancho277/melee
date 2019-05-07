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
        <button className="btn">
          <span className="badge badge-primary">Start</span>
        </button>
        <a className="nav-link active" href="#">
          sign in
        </a>
        <a className="nav-link sctive" href="#">
          sign up
        </a>
      </nav>

      <h1> 
        
        <img id="melee_logo" src="../images/" alt="Melee!!"></img> 
      
      </h1>
    </div>
  );
  }
}

export default Navbar;
