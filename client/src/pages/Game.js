import React, { Component } from "react";
import { HexGrid } from "react-hexgrid";
import GameLayout from "../components/GameLayout";
import TilesLayout from "../components/TilesLayout";
import AttackSelect from "../components/AttackSelect";
import "./Game.css";
import DiceComponent from "../components/DiceRoller";
import RollButton from "../components/RollButton";

//number of dice
let numDice = 3;

let player1 = {
  playerId: 0,
  strength: 120,
  dexterity: 15,
  hitPoints: 120,
  armor: 0,
  initialAttackPower: 8,
  playerName: "Thundarr",
  playerSide: "Fighter",
  src: "http://placeimg.com/480/400/people"
};
export default class Game extends Component {
  clicked = () => {
    console.log("hello");
  };
  render() {
    return (
      <div className="game">
        <HexGrid width={1600} height={1000} viewBox="-50 -50 100 100">
          <GameLayout />
          {/* <TilesLayout /> */}

          {/* <AttackSelect player={player1} /> */}
          {/* including dice component */}
        </HexGrid>
        {/* <AttackSelect player={player1} /> */}

        <div id="dice-controller">
          {/* including dice component */}

          <div id="dice-conatiner">
            <DiceComponent numDice={numDice} getRoll={this.clicked} />
          </div>
        </div>
      </div>
    );
  }
}
