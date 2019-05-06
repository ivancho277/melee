import React, { Component } from 'react'
import Navbar from "../components/Navbar";

import AboutCard from "../components/AboutCard";
import CharacterCard from '../components/CharacterCard';
import Jumbotron1 from '../components/Jumbotron1';
import Jumbotron2 from '../components/Jumbotron2';
import { Col, Row, Container } from "../components/Grid";

export default class CharacterChoice extends Component {
  render() {
    let name = 'Crazy Ivan'
    let name1= 'bob'

    let name2= 'kevin'
    let stats = {
        strength: 11,
        dexterity: 13
      } 
      let stats1 = {
        strength: 12,
        dexterity: 12
      } 
      let stats2 = {
        strength: 13,
        dexterity: 11
      } 
      let src = 'https://placeimg.com/641/481/people'
      let src1 = 'https://placeimg.com/640/480/people'
      let src2 = 'https://placeimg.com/642/482/people'
      return (
        <div>
        <Container>
          <Row>
            <Col size='4'>

              <Jumbotron1 stats={stats} src={src1} name={name1} />
              <Jumbotron1 stats={stats1} src={src1} name={name1} />

            </Col>
            <Col size='4'>
            <CharacterCard stats={stats} src={src} name={name} />
            </Col>
            <Col size='4'>
              <Jumbotron2 stats={stats2} src={src2} name={name2} />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

