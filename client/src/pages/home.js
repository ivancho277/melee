import React from 'react'
import Navbar from '../components/Navbar';
import AboutCard from "../components/AboutCard";
import CharacterCard from '../components/CharacterCard'
import Jumbotron1 from '../components/Jumbotron1'
import Jumbotron2 from '../components/Jumbotron2'

function Home() {
  let image = "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwj3jNvW0v3hAhW2CjQIHa26Cv8QjRx6BAgBEAU&url=http%3A%2F%2Fmilitary-fail.com%2Fcrazy-ivan%2F&psig=AOvVaw1xBjGk0ZZJulH05poMYguL&ust=1556913966451867"
    return (
    <div>
      <CharacterCard src = 'image'/>
      <Jumbotron1/>
      
      <Jumbotron2/>
    </div>
  )
}

export default Home

