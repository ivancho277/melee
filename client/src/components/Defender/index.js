import React, { Component } from "react";
import DiceComponent from "../DiceRoller/";
import "./style.css";
import { element } from "prop-types";

let numDice = 3;
class Defender extends Component {
  state = {
    roll: 0,
    isEngaged: false,
    hp: this.props.hp
  };

  DiceRollReturn = num => {  
    this.setState({
      roll: num
    })
  }

  render() {
    return (
      
      <div className="col-2"  idName="attacker-section">
        <div className="card box-shadow" idName="attacker-card">
          <span className="defender-title">{this.props.name}</span>
          <div className="card-header text-center font-weight-bold">Wuf</div>
          <div idName="attacker-stats" style={{ textAlign: "left" }}>
            <br />
            HP: {this.state.hp}
            <br />
            STR: {this.props.strength} <br />
            DX: {this.props.dexterity} <br />
            adjDX: {this.props.adjDx} <br />
            Weapon: {this.props.weapon}
            <br />
            wDmg: {this.props.wDmg} <br />
            Armor: {this.props.armor}
            <br />
            Shield: {this.props.shield} <br />
            armorAbsorbs(hp): {this.props.armorAbsorbs} <br />
            adjMovement: {this.props.adjMovement}
            <br /> <br />
            YOU ROLLED : {this.state.roll}
            <DiceComponent numDice={numDice}  getNum={this.DiceRollReturn}/>
          </div>
        </div>
      </div>
      
    );
  }
}

export default Defender;
