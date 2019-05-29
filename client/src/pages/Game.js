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
    gameCharcters: initialCharacters,
    engagedId: 0
  };

  whichEnemyIsNear = () => {
    if (this.state.gameCharcters[1].hex) {
      for (let i = 1; i < this.state.gameCharcters.length; i++) {
        for (let j = 0; j < 6 /* size of neighbors array */; j++) {
          if (
            this.state.gameCharcters[i].neighbors[j].q ===
              this.state.gameCharcters[0].hex.q &&
            this.state.gameCharcters[i].neighbors[j].r ===
              this.state.gameCharcters[0].hex.r &&
            this.state.gameCharcters[i].neighbors[j].s ===
              this.state.gameCharcters[0].hex.s
          ) {
            console.log("Moo", this.state.gameCharcters[i].id);

            return this.state.gameCharcters[i].id;
          }
        }
      }
    }
  };

  componentDidUpdate(prevProps, nextState, snapshotValue) {
    
      //console.log("ID", snapshotValue);
    }
    //let id = this.whichEnemyIsNear();
    //console.log("ID", snapshotValue);
  

 

  isEnemyNear = next => {
    this.setState({
      combat: next
    });
  };

  addLocations = (locations, neighbors) => {
    for (let i = 1; i < this.state.gameCharcters.length; i++) {
      initialCharacters[i].hex = locations[i - 1];
      initialCharacters[i].neighbors = neighbors[i - 1];
    }
    this.setState({
      gameCharcters: initialCharacters
    });
  };

  PlayerLocation = DropLocation => {
    initialCharacters[0].hex = DropLocation;
    this.setState({
      gameCharcters: initialCharacters
    });
  };

  //function that checks playerlocation against each
  //monsters neighbor array, this should return a boolean to
  //be passed down to defender component.

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
            idSelect={this.state.engagedId}
          />
        </div>
      </div>
    );
  }
}
