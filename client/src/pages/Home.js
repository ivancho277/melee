import React from "react";
import Navbar from "../components/Navbar";
import AboutCard from "../components/AboutCard";
import CharacterCard from '../components/CharacterCard'
import Jumbotron1 from '../components/Jumbotron1'
import Jumbotron2 from '../components/Jumbotron2'
import DiceComponent from '../components/DiceRoller'


function Home() {
  
  let numDice = 3
let src = "https://placeimg.com/640/480/people" 
   return (
    <div> 
<<<<<<< HEAD
=======
      <br></br>
      <br></br>
      <br></br>
      {/* <Jumbotron1/> */}
>>>>>>> 2585351c39e14a24f86f53fed7ed9b435ebd3342
      <AboutCard />
      <DiceComponent
      numDice={numDice}
      />
    </div>
  );
}

export default Home;
