import React, { Component } from "react";
import CharacterCard from "../components/CharacterCard";
import { Col, Row, Container } from "../components/Grid";
import PreMadeChar from "../components/PreMadeCharactersCard";
import api from "../components/Api";

// import client side api
// pull all characters from database
// assign to local objects

let stats1 = {
  strength: 11,
  dexterity: 13,
  name: "Crazy Ivan",
  src: "https://placeimg.com/641/481/people",
  movementAllowance: 10,
  weapon: "",
  armor: "",
  sheild: "",
  life_status: 1
};
let stats2 = {
  strength: 12,
  dexterity: 12,
  name: "Jordapeno",
  src: "https://placeimg.com/640/480/tech",
  movementAllowance: 10,
  weapon: "",
  armor: "",
  sheild: "",
  life_status: 1
};
let stats3 = {
  strength: 13,
  dexterity: 11,
  name: "Turnson Bronquist",
  src: "https://placeimg.com/642/482/animal",
  movementAllowance: 10,
  weapon: "",
  armor: "",
  sheild: "",
  life_status: 1
};
let stats4 = {
  strength: 14,
  dexterity: 10,
  name: "Chris P. Bacon",
  src:
    "https://media.istockphoto.com/photos/cooked-bacon-rashers-closeup-isolated-on-a-white-background-picture-id508755080",
  movementAllowance: 10,
  weapon: "",
  armor: "",
  sheild: "",
  life_status: 1
};

let characterArray = [stats1, stats2, stats3, stats4];

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
    characterCard: "char"
  };

  getCharacterData = () => {
    //console.log("FUCK YO!!");

    api.getThralls().then((res, err) => {
      if (err) {
        console.log("Not getting here?");
      } else {
        console.log(res);
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
          <Row>
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
          </Row>
        </Container>
        <button onClick={this.getCharacterData}>check if api works</button>
      </div>
    );
  }
}
