import React, { Component } from 'react'
import Navbar from "../components/Navbar";
import AboutCard from "../components/AboutCard";
import CharacterCard from '../components/CharacterCard';
import Jumbotron1 from '../components/Jumbotron1';
import Jumbotron2 from '../components/Jumbotron2';
import { Col, Row, Container } from "../components/Grid";
import DiceComponent from "../components/DiceRoller"

let stats1 = {
  strength: 11,
  dexterity: 13,
  name: 'Crazy Ivan',
  src: 'https://placeimg.com/641/481/people',
  movementAllowance: 10,
  weapon: "",
  armor: "",
  sheild: "",
  life_status: 1
}
let stats2 = {
  strength: 12,
  dexterity: 12,
  name: 'Jordapeno',
  src: 'https://placeimg.com/640/480/tech',
  movementAllowance: 10,
  weapon: "",
  armor: "",
  sheild: "",
  life_status: 1
}
let stats3 = {
  strength: 13,
  dexterity: 11,
  name: 'Turnson Bronquist',
  src: 'https://placeimg.com/642/482/animal',
  movementAllowance: 10,
  weapon: "",
  armor: "",
  sheild: "",
  life_status: 1
}
let stats4 = {
  strength: 14,
  dexterity: 10,
  name: 'Chris P. Bacon',
  src: 'https://media.istockphoto.com/photos/cooked-bacon-rashers-closeup-isolated-on-a-white-background-picture-id508755080',
  movementAllowance: 10,
  weapon: "",
  armor: "",
  sheild: "",
  life_status: 1
}

let characterArray = [stats1, stats2, stats3, stats4];




export default class CharacterChoice extends Component {
  selectCharacterByName = (name) => {
    for (let i = 0; i < characterArray.length; i++) {
      console.log("NAMES: " , name ,characterArray[i].name);
      if (characterArray[i].name === name){
        return characterArray[i]
      }

    }
    return "no such character"
  }

    state = {
      characterCard: "char"
    }

    getCharacterData = () => {

    }

    onCharcterClick = (name) => {
      console.log(name);
      let selected = this.selectCharacterByName(name);
      console.log(selected)
      console.log(name);
      this.setState({
        characterCard: <CharacterCard name={selected.name} src={selected.src} strength={selected.strength} dexterity={selected.dexterity} />
      })
    }
    render(){
      return (
        <div>
          <Container>
            <Row>
              <Col size='4'>
                <Jumbotron1 click={this.onCharcterClick} />
              </Col>
              <Col size='4'>
                {this.state.characterCard}
              </Col>
              <Col size='4'>
                <Jumbotron2 />
              </Col>
            </Row>
          </Container>
        </div>
      )
    }
  }


