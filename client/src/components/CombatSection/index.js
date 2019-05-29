import React, { Component } from "react";
import DiceComponent from "../DiceRoller/";
import "./style.css";
import { element } from "prop-types";
import Attacker from "../AttackSelect";
import Defender from "../Defender";
import AttackSelect from "../AttackSelect";
import CombatStats from "../CombatStats";
let numDice = 3;
class CombatSection extends Component {
  //{ elements } = this.props.elements

  whoIsDefender = () => {
    let component = <div>hi</div>
    for (let i = 1; i < 4; i++) {
      if (this.props.idSelect === this.props.elements[i].id) {
        let defender = this.props.elements[i]
          component = <Defender
            id={defender.id}
            idSelect={this.props.idSelect}
            key={i}
            hp={defender.hp}
            name={defender.name}
            strength={defender.strength}
            dexterity={defender.dexterity}
            adjDx={defender.adjDx}
            weapon={defender.weapon}
            wDmg={defender.wDmg}
            armor={defender.armor}
            shield={defender.shield}
            armorAbsorbs={defender.armorAbsorbs}
            adjMovement={defender.adjMovement}
            location={defender.hex}
          />
         return component
      } else { 
        component = <div>hi</div>
       
      }
      
    }
    return component
  };

  render() {
    return (
      <div>
        <div className="row combat-section" idName="tbd">
          <AttackSelect elements={this.props.elements} />
          {this.whoIsDefender()}
        </div>
        <CombatStats />
      </div>
    );
  }
}

export default CombatSection;
