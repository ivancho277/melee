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
import { initialCharacters } from "../components/constants/index";
import { link } from "fs";

export default class Game extends Component {
  state = {
    combat: false,
    gameCharcters: initialCharacters
  };

  whichEnemyIsNear = (myLocation) => {
    let myBoolean = false;
    console.log("MyLOCATION: " + myLocation.q + ", " + myLocation.s)
    let enemyLocationArray = [
      this.state.gameCharcters[1].hex,
      this.state.gameCharcters[2].hex,
      this.state.gameCharcters[3].hex
    ];
    for (let i = 0; i < enemyLocationArray.length; i++) {
      if (
        myLocation.q === enemyLocationArray[i].q &&
        myLocation.r === enemyLocationArray[i].r &&
        myLocation.s === enemyLocationArray[i].s
      ) {
        myBoolean = true;
      } 
    }
    return myBoolean;
  };

  isEnemyNear = next => {
    this.setState({
      combat: next
    });
  };

  addLocations = locations => {
    for (let i = 1; i < 4; i++) {
      initialCharacters[i].hex = locations[i - 1];
    }
    this.setState({
      gameCharcters: initialCharacters
    });
  };

  PlayerLocation = (DropLocation) => {
    initialCharacters[0].hex = DropLocation;
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
          <GameLayout
            locations={this.addLocations}
            isEnemyNear={this.isEnemyNear}
            whichEnemyIsNear={this.whichEnemyIsNear}
            playerLocation={this.PlayerLocation}
          />
          {/* <TilesLayout /> */}

          {/* <AttackSelect player={player1} /> */}
          {/* including dice component */}
        </HexGrid>
        {/* <AttackSelect player={player1} /> */}

        {this.state.combat ? <CombatButton /> : null}
        <div id="combat-section">
          <CombatSection
            elements={this.state.gameCharcters}
            location={this.whichEnemyIsNear}
            whichEnemyIsNear={this.whichEnemyIsNear}

          />
        </div>
      </div>
    );
  }
}
