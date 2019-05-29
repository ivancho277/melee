import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import {Component} from "react";
import InstructionModal from "../InstructionsModal";
import CharacterSelect from "../CharacterSelect"
class Navbar extends Component {

  render(){
  return (
    <div>
      <nav className="nav">
        {/* <InstructionModal />
        <CharacterSelect /> */}
      
      {/* <button>
        <Link to="/characterSelect">
          Choose Character
        </Link>
        </button> */}
       
{/* <div class="g-signin2" data-onsuccess="onSignIn"></div> */}
      

        <Link className="navbar-brand" to="/">
          Home
        </Link>
        <Link className="navbar-brand" to="/characterSelect">
          Start Game
        </Link>
        <a className="navbar-brand" target="_blank" href="http://bluwiki.com/go/Tft-melee">
          Game Instructions
        </a>
      </nav>

      <div id="title-id"></div>
    </div>
  );
  }
}

export default Navbar;
