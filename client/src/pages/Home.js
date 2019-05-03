import React from "react";
import Navbar from "../components/Navbar";
import AboutCard from "../components/AboutCard";
import CharacterCard from '../components/CharacterCard'
import Jumbotron1 from '../components/Jumbotron1'
import Jumbotron2 from '../components/Jumbotron2'

function Home() {
  let stats = {
    strength: 11,
    dexterity: 13
  }
let src = "https://placeimg.com/640/480/people" 
   return (
    <div> 
      <Jumbotron1/>
      <CharacterCard stats={stats} src={src} />
      <Jumbotron2/>
    </div>
  );
}

export default Home;
