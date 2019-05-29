import React, { Component } from "react";
import DiceComponent from "../DiceRoller/";
import DiceComponent1 from "../DiceRoller1";
import "./style.css";
import { element } from "prop-types";

class Defender extends Component {
  state = {
    roll: 0,
    numDice: 3,
    isEngaged: false,
    engagedStyle: "5px solid green",
    notEngagedStyle: "5px solid red",
    hp: this.props.hp,
    id: this.props.id
  };

  DiceRollReturn = num => {
    this.setState({
      roll: num
    });
  };

  CheckifEngaged = () => {
      if (this.props.id === this.props.idSelect) {
        this.setState({
          isEngaged: true
        });
      } else {
        this.setState({
          isEngaged: false
        });
      }
    
  };

  render() {
    return (
      <div
        className="defender"
        style={
          this.state.isEngaged
            ? { border: this.state.engagedStyle }
            : { border: this.state.notEngagedStyle }
        }
      >
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
            <button onClick={this.CheckifEngaged}>CHECK!</button>
            <DiceComponent
              numDice={this.state.numDice}
              getNum={this.DiceRollReturn}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Defender;
