import React, { Component } from 'react'
import Navbar from "../components/Navbar";
import AboutCard from "../components/AboutCard";
import CharacterCard from '../components/CharacterCard';
import Jumbotron1 from '../components/Jumbotron1';
import Jumbotron2 from '../components/Jumbotron2';
import { Col, Row, Container } from "../components/Grid";
export default class CharacterChoice extends Component {
  onCharcterClick = () => {
      
      //return it
  } 
  render() {
    
      return (
        <div>
        <Container>
          <Row>
            <Col size='4'>
              <Jumbotron1 />
            </Col>
            <Col size='4'>
            <CharacterCard  />
            </Col>
            <Col size='4'>
              <Jumbotron2  />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

