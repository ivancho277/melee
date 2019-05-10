import React, { Component } from "react";
import { HexGrid } from "react-hexgrid";
import GameLayout from "../components/GameLayout";
import TilesLayout from "../components/TilesLayout";
import AttackSelect from "../components/AttackSelect";
import "./Game.css";
import DiceComponent from "../components/DiceRoller";
<<<<<<< HEAD

=======
import RollButton from "../components/RollButton";



>>>>>>> 2f8d8fc4f62dde44f33e3f68e2b592c2f273d030
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
        </ HexGrid>
        {/* <AttackSelect player={player1} /> */}


  
        <div id="dice-controller">
        {/* including dice component */}

<<<<<<< HEAD
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
=======
        <div>

          <div id="dice-conatiner">
            <DiceComponent numDice={numDice} getRoll={this.clicked} />
           

          </div>
        </div>
  

>>>>>>> 2f8d8fc4f62dde44f33e3f68e2b592c2f273d030
    );
  }
}
