import React, { Component } from "react";
import AttackSelect from "../components/AttackSelect";
import gameimg from "./MeleeGamePieces-02.jpg"
let player1 = {
  playerId: 0,
  strength: 120,
  dexterity: 15,
  hitPoints: 120,
  armor: 0,
  initialAttackPower: 8,
  playerName: "Thundarr",
  playerSide: "Fighter",
  src: gameimg 
};



class NoMatch extends Component {

  render() {
    return (
      // <div>
      //   <div class="jumbotron jumbotron-fluid">
      //       <div cl ass="container">
      //           <h1 class="display-3">YOU SHOULDNT BE HERE</h1>
      //           <p class="lead">LEAVE NOW</p>
      //           <hr class="my-2" />
      //           <p>If you got here you really messed up, you broke the whole world and you should feel bad</p>
      //           <p class="lead">
      //               <a class="btn btn-primary btn-lg" href="Jumbo action link" role="button">Just go home and think about what you have done</a>
      //           </p>
      //       </div>
      //   </div>
      // </div>
      <AttackSelect player={player1} onClick={this.onClick} />
    );
  }
}

export default NoMatch;
