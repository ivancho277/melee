import React from 'react'
import Navbar from '../components/Navbar';
import AboutCard from "../components/AboutCard";
import CharacterCard from '../components/CharacterCard'

function Home() {
  let image = 'https://i2.wp.com/military-fail.com/wp-content/uploads/2015/04/crazy-ivan.jpg?resize=500%2C395'
  return (
    <div>
      <CharacterCard src= {image}/>
    </div>
  )
}

export default Home

