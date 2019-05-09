import React, { Component } from "react";
import { HexGrid } from "react-hexgrid";
import GameLayout from "../components/GameLayout";
import TilesLayout from "../components/TilesLayout";
import AttackSelect from "../components/AttackSelect";
import "./Game.css";
import DiceComponent from '../components/DiceRoller'

//number of dice
let numDice = 3


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
<<<<<<< Updated upstream
        </HexGrid>
        <AttackSelect player={player1} />
=======
          <AttackSelect player={player1} />

        </HexGrid>
        {/* <AttackSelect player={player1} /> */}
    
>>>>>>> Stashed changes
        <div id="dice-controller">
        {/* including dice component */}
        <DiceComponent
      numDice={numDice}
      />
      </div>
      </div>
    );
  }
}
