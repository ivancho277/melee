import React from "react";
import DiceComponent from "../DiceRoller/";
import "./style.css";
import { element } from "prop-types";
import Attacker from "../AttackSelect"
import Defender from "../Defender"
import AttackSelect from "../AttackSelect";
let numDice = 3;
function CombatSection(props) {
  //{ elements } = this.props.elements

  return (
    <div>
      <div className="row combat-section" idName="tbd">
      <AttackSelect elements={props.elements} />
        {props.elements.map((defender, i) => {
            if (i === 0) {
              return;
            } else {
              return (
                <Defender
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
                  location={props.location}
                />
                
              );
            }
          })}


      </div>
    </div>
  );
}

export default CombatSection;
