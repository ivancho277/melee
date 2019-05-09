import React, { Component } from "react";
import { HexGrid } from "react-hexgrid";
import GameLayout from "../components/GameLayout";
import TilesLayout from "../components/TilesLayout";
import AttackSelect from "../components/AttackSelect";
import "./Game.css";
import DiceComponent from "../components/DiceRoller";

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
  render() {
    return (
      <div className="game">
        <HexGrid width={1600} height={1000} viewBox="-50 -50 100 100">
          <GameLayout />
          {/* <TilesLayout /> */}

        </HexGrid>
        <AttackSelect player={player1} />

          <AttackSelect player={player1} />

        </HexGrid>
        {/* <AttackSelect player={player1} /> */}
    

        <div id="dice-controller">
        {/* including dice component */}

          <AttackSelect player={player1} />
<<<<<<< HEAD
          {/* including dice component */}
=======
{/* including dice component */}

        <DiceComponent
      numDice={numDice}
      />
>>>>>>> eaf65781e7142b039e65715b74f99453afa3eec3
        </HexGrid>
        {/* <AttackSelect player={player1} /> */}
        <div>
          <DiceComponent numDice={numDice} />
          <button>Roll all</button>
        </div>
      </div>
    );
  }
}
