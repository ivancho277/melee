import React, { Component } from 'react'
import Navbar from "../components/Navbar";

import AboutCard from "../components/AboutCard";
import CharacterCard from '../components/CharacterCard';
import Jumbotron1 from '../components/Jumbotron1';
import Jumbotron2 from '../components/Jumbotron2';
import { Col, Row, Container } from "../components/Grid";
export default class CharacterChoice extends Component {
  render() {
    let stats = {
        strength: 11,
        dexterity: 13
      }
      let src = 'https://placeimg.com/640/480/people'
      let src1 = 'https://placeimg.com/641/481/people'
      return (
        <div>
        <Container>
          <Row>
            <Col size='4'>
              <Jumbotron1 stats={stats} src={src1} />
            </Col>
            <Col size='4'>
            <CharacterCard stats={stats} src={src} />
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

