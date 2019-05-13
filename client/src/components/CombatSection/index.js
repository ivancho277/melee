import React from "react";
import DiceComponent from "../DiceRoller/";
import "./style.css";
import { elements } from "../constants/index";

let numDice = 3;
function CombatSection(props) {
  //{ elements } = this.props.elements
  return (
    <div>
      <div className="row combat-section" idName="tbd">
        <div className="col-2" idName="attacker-section">
          <div className="card box-shadow" idName="attacker-card">
            <span className="attacker-title">Attacker</span>
            <div className="card-header text-center font-weight-bold">
              {props.elements[0].name}
            </div>
            <div idName="attackerStats" style={{ textAlign: "left" }}>
              HP: {props.elements[0].hp}
              <br />
              STR: {props.elements[0].strength}
              <br />
              DX: {props.elements[0].dexterity}
              <br />
              adjDX: {props.elements[0].adjDx}
              <br />
              Weapon: {props.elements[0].weapon}
              <br />
              wDmg: {props.elements[0].wDmg}
              <br />
              Armor: {props.elements[0].armor}
              <br />
              Shield: {props.elements[0].shield}
              <br />
              armorAbsorbs(hp): {props.elements[0].armorAbsorbs} <br />
              adjMovement: {props.elements[0].adjMovement}
            </div>
          </div>
          <DiceComponent numDice={numDice} />
        </div>
        {/* <div className="col-2" idName="attacker-section">
          <div className="card box-shadow" idName="attacker-card">
            <span className="defender-title">Defender Option 1</span>
            <div className="card-header text-center font-weight-bold">Wuf</div>
            <div idName="attacker-stats" style={{ textAlign: "left" }}>
              key=key <br />
              HP: 11
              <br />
              STR: 11 <br />
              DX: 13 <br />
              adjDX: 10 <br />
              Weapon: Short Sword <br />
              wDmg: 2d6-1 <br />
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
        <div className="col-2" idName="attacker-section">
          <div className="card box-shadow" idName="attacker-card">
            <span className="defender-title">Defender Option 2</span>
            <div className="card-header text-center font-weight-bold">Bear</div>
            <div idName="attackerStats" style={{ textAlign: "left" }}>
              key=key <br />
              HP: 11
              <br />
              STR: 11 <br />
              DX: 13 <br />
              adjDX: 10 <br />
              Weapon: Short Sword <br />
              wDmg: 2d6-1 <br />
              Armor: Leather Armor
              <br />
              Shield: Large Shield <br />
              armorAbsorbs(hp): 4 <br />
              adjMovement: 8<br /> <br />
              <button variant="danger">ATTACK BEAR! </button>
              <DiceComponent numDice={numDice} />
            </div>
          </div>
        </div>
        <div className="col-2" idName="attacker-section">
          <div className="card box-shadow" idName="attacker-card">
            <span className="defender-title">Defender Option 3</span>
            <div className="card-header text-center font-weight-bold">Snek</div>
            <div idName="attackerStats" style={{ textAlign: "left" }}>
              key=key <br />
              HP: 11
              <br />
              STR: 11 <br />
              DX: 13 <br />
              adjDX: 10 <br />
              Weapon: Short Sword <br />
              wDmg: 2d6-1 <br />
              Armor: Leather Armor
              <br />
              Shield: Large Shield <br />
              armorAbsorbs(hp): 4 <br />
              adjMovement: 8<br /> <br />
              <button variant="danger">ATTACK SNEK! </button>
              <DiceComponent numDice={numDice} />
            </div>
          // </div> */}
      </div>
    </div>
  );
}

export default CombatSection;
