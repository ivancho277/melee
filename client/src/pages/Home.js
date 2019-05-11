import React from "react";
import Navbar from "../components/Navbar";
import AboutCard from "../components/AboutCard";
import CharacterCard from '../components/CharacterCard'
import Jumbotron1 from '../components/Jumbotron1'
import Jumbotron2 from '../components/Jumbotron2'


function Home() {
  
  let numDice = 3
let src = "https://placeimg.com/640/480/people" 
   return (
    <div> 
      <br></br>
      <br></br>
      <br></br>
      {/* <Jumbotron1/> */}
      <AboutCard />
      
    </div>
  );
}

export default Home;
