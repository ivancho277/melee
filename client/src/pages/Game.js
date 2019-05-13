import React, { Component } from "react";
import { HexGrid } from "react-hexgrid";
import GameLayout from "../components/GameLayout";
import TilesLayout from "../components/TilesLayout";
import AttackSelect from "../components/AttackSelect";
import CombatSection from "../components/CombatSection";
//import "bootstrap/dist/css/bootstrap.css";
import "./Game.css";
import DiceComponent from "../components/DiceRoller";
import CombatButton from "../components/RollButton";
import {initialCharacters} from "../components/constants/index"
import { link } from "fs";



export default class Game extends Component {
  state = {
    combat: false,
    gameCharcters: initialCharacters
    
  };

  isEnemyNear = next => {
    this.setState({
      combat: next
    });
  };

  addLocations = (locations) => {
    for(let i = 0; i < 3; i++){
      initialCharacters[i].hex = locations[i]
    }
    this.setState({
      gameCharcters: initialCharacters
    })
  }

  clicked = () => {
    console.log("hello");
  };
  render() {
    return (
      <div className="game" idName="game-wrapper">
        <HexGrid width={1600} height={1000} viewBox="-50 -50 100 100">
          <GameLayout locations={this.addLocations} isEnemyNear={this.isEnemyNear} />
          {/* <TilesLayout /> */}

          {/* <AttackSelect player={player1} /> */}
          {/* including dice component */}
        </HexGrid>
        {/* <AttackSelect player={player1} /> */}

        {this.state.combat ? <CombatButton  /> : null}
        <div id="combat-section">
          <CombatSection elements={initialCharacters} location={this.addLocations} />
        </div>
      </div>
    );
  }
}
