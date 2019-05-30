import React, { Component } from "react";
// import { List, ListItem } from "../List";
import DiceComponent from "../DiceRoller"

export default class AttackSelect extends Component {
  state = {
    roll: 0,
    numDice: 3
  }
  DiceRollReturn = num => {  
    this.setState({
      roll: num
    })
  }

  render(){
  return(
  
        <div className="col-2" id="attacker-section">
          <div className="card box-shadow" id="attacker-card">
            <span className="attacker-title">Attacker</span>
            <div className="card-header text-center font-weight-bold">
              {this.props.elements[0].name}
            </div>
            <div id="attackerStats" style={{ textAlign: "left" }}>
              HP: {this.props.elements[0].hp}
              <br />
              STR: {this.props.elements[0].strength}
              <br />
              DX: {this.props.elements[0].dexterity}
              <br />
              adjDX: {this.props.elements[0].adjDx}
              <br />
              Weapon: {this.props.elements[0].weapon}
              <br />
              wDmg: {this.props.elements[0].wDmg}
              <br />
              Armor: {this.props.elements[0].armor}
              <br />
              Shield: {this.props.elements[0].shield}
              <br />
              armorAbsorbs(hp): {this.props.elements[0].armorAbsorbs} <br />
              adjMovement: {this.props.elements[0].adjMovement} <br />
              You Rolled: {this.state.roll}
            </div>
            <DiceComponent numDice={this.state.numDice} getNum={this.DiceRollReturn} />
          </div>
          
        </div>
        
  )};
}