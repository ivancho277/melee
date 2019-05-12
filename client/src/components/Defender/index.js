import React from "react";
import DiceComponent from "../DiceRoller/";
// import "./style.css";
import { element } from "prop-types";

let numDice = 3;
function Defender(props) {
  return (
    <div className="col-2" idName="attacker-section">
      <div className="card box-shadow" idName="attacker-card">
        <span className="defender-title">{props.name}</span>
        <div className="card-header text-center font-weight-bold">Wuf</div>
        <div idName="attacker-stats" style={{ textAlign: "left" }}>
          key=key <br />
          HP: {props.hp}
          <br />
          STR: {props.strength} <br />
          DX: {props.dexterity} <br />
          adjDX: {props.adjDx} <br />
          Weapon: {props.weapon}
          <br />
          wDmg: {props.wDmg} <br />
          Armor: Leather Armor
          <br />
          Shield: Large Shield <br />
          armorAbsorbs(hp): 4 <br />
          adjMovement: 8<br /> <br />
          <button variant="danger">ATTACK WUF! </button>
          <DiceComponent numDice={numDice} />
        </div>
      </div>
    </div>
  );
}

export default Defender;
