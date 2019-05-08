import React, { Component } from "react";
import { HexGrid } from "react-hexgrid";
import GameLayout from "../components/GameLayout";
import TilesLayout from "../components/TilesLayout";
import AttackSelect from "../components/AttackSelect";
import "./Game.css";
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
      </div>
    );
  }
}
