import React, { Component } from "react";
import CharacterCard from "../components/CharacterCard";
import { Col, Row, Container } from "../components/Grid";
import PreMadeChar from "../components/PreMadeCharactersCard";
import api from "../components/Api";
import icon11 from "./gamePieceImages/MeleeGamePieces-11.jpg";
import icon35 from "./gamePieceImages/MeleeGamePieces-35.jpg";
import icon37 from "./gamePieceImages/MeleeGamePieces-37.jpg";
import icon32 from "./gamePieceImages/MeleeGamePieces-32.jpg";
import iconBear from "./gamePieceImages/MeleeGamePieces-17.jpg";
import iconSnek from "./gamePieceImages/MeleeGamePieces-20.jpg";
import iconWuf from "./gamePieceImages/MeleeGamePieces-25.jpg";
import ivan from "./gamePieceImages/crazy-ivan.jpg";

// import icon from "../../pages/gamePieceImages/MeleeGamePieces-01.jpg"

// import client side api
// pull all characters from database
// assign to local objects

let stats1 = {
  strength: 11,
  dexterity: 13,
  name: "Crazy Ivan",
  // src: "https://placeimg.com/641/481/people",
  src: ivan,
  movementAllowance: 10,
  weapon: "",
  armor: "",
  shield: "",
  life_status: 1
};
let stats2 = {
  strength: 12,
  dexterity: 12,
  name: "Jordapeno",
  // src: "https://placeimg.com/640/480/tech",
  src: icon35,
  movementAllowance: 10,
  weapon: "",
  armor: "",
  shield: "",
  life_status: 1
};
let stats3 = {
  strength: 13,
  dexterity: 11,
  name: "Turnson Bronquist",
  // src: "https://placeimg.com/642/482/animal",
  src: icon37,
  movementAllowance: 10,
  weapon: "",
  armor: "",
  shield: "",
  life_status: 1
};
let stats4 = {
  strength: 14,
  dexterity: 10,
  name: "Chris P. Bacon",
  src: icon32,
  // src:
  // "https://media.istockphoto.com/photos/cooked-bacon-rashers-closeup-isolated-on-a-white-background-picture-id508755080",
  movementAllowance: 10,
  weapon: "",
  armor: "",
  shield: "",
  life_status: 1
};
let stats5 = {
  strength: 10,
  dexterity: 14,
  name: "Wuf",
  src: iconWuf,
  movementAllowance: 12,
  weapon: "Teeph!",
  armor: "Pelt",
  shield: "",
  life_status: 1
};
let stats6 = {
  strength: 30,
  dexterity: 11,
  name: "Bear",
  src: iconBear,
  movementAllowance: 10,
  weapon: "Bear Claw",
  armor: "Hide",
  shield: "",
  life_status: 1
};
let stats7 = {
  strength: 8,
  dexterity: 12,
  name: "Snek",
  src: iconSnek,
  movementAllowance: 6,
  weapon: "Fangs",
  armor: "Pelt",
  shield: "",
  life_status: 1
};

let characterArray = [stats1, stats2, stats3, stats4, stats5, stats6, stats7];

export default class CharacterChoice extends Component {
  selectCharacterByName = name => {
    for (let i = 0; i < characterArray.length; i++) {
      console.log("NAMES: ", name, characterArray[i].name);
      if (characterArray[i].name === name) {
        return characterArray[i];
      }
    }
    return "no such character";
  };

  state = {

    characterCard: "",
    thralls: []
  };

  getCharacterData = () => {
    
    let tempArr = [];
    api.getThralls().then((res, err) => {
      if (err) {
        console.log("Not getting here?");
      } else {
        console.log(res);
        for (let index = 0; index < res.data.length; index++) {
          tempArr.push(res.data[index]);
        }
        this.setState({
          thralls: tempArr
        });
      }
    });
  };

  onCharacterClick = name => {
    console.log(name);
    let selected = this.selectCharacterByName(name);
    console.log(selected);
    console.log(name);
    this.setState({
      characterCard: (
        <CharacterCard
          name={selected.name}
          src={selected.src}
          strength={selected.strength}
          dexterity={selected.dexterity}
        />
      )
    });
  };
  render() {
    return (
      <div>
        <Container>
          <Col size="4">
            <PreMadeChar
              onCharacterClick={this.onCharacterClick}
              stats={stats1}
            />
            <PreMadeChar
              onCharacterClick={this.onCharacterClick}
              stats={stats2}
            />
            <PreMadeChar
              onCharacterClick={this.onCharacterClick}
              stats={stats3}
            />
            <PreMadeChar
              onCharacterClick={this.onCharacterClick}
              stats={stats4}
            />

          </Col>
          <Col size="4">{this.state.characterCard}</Col>
        </Container>
        {/* <button onClick={this.getCharacterData}>check if api works</button> */}
      </div>

    );
  }
}
