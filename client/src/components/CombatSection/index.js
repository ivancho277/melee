import React, { Component } from "react";
import DiceComponent from "../DiceRoller/";
import "./style.css";
import { element } from "prop-types";
import Attacker from "../AttackSelect";
import Defender from "../Defender";
import AttackSelect from "../AttackSelect";
import CombatStats from "../CombatStats";
//import DiceComponent from "../DiceRoller"
let numDice = 3;
class CombatSection extends Component {
  //{ elements } = this.props.elements

RollToHit = (roll, dex) => {
  if(roll <= dex){
    console.log("YOU HIT THIS BIT");
    return true;
  }
  else {
    console.log("MISSED"); 
    return false;
  }
}

howManyDiceToRender = (didWeHit) => {
  if(didWeHit){
    return 2
  } else return 3
}


  whoIsDefender = () => {
    let component = <div></div>
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
        component = <div></div>
        
      }
      
    }
    return component
  };

  render() {
    return (
      <div>
        <div className="row combat-section" idName="tbd">
          <AttackSelect rollToHit={this.RollToHit}
          elements={this.props.elements}
          howManyDice={this.howManyDiceToRender}
           />
          {this.whoIsDefender()}
        </div>
        <CombatStats hit={this.RollToHit} />
      </div>
    );
  }
}

export default CombatSection;
