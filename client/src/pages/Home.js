import React from "react";
import Navbar from "../components/Navbar";
import AboutCard from "../components/AboutCard";
import CharacterCard from '../components/CharacterCard'
import Jumbotron1 from '../components/Jumbotron1'
import Jumbotron2 from '../components/Jumbotron2'
import { Col, Row, Container } from '../components/Grid'

function Home() {
  let stats = {
    strength: 11,
    dexterity: 13
  }
  let src = "https://placeimg.com/640/480/people"
  return (
    <div>
      <Container>
        <Row>
          <Col size='4'>
            <Jumbotron1 />
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
  );
}

export default Home;
