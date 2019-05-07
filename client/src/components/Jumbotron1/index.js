import React from 'react';
import './style.css';
import PreMadeChar from "../PreMadeCharactersCard"


function Jumbotron1() {
    let name = 'Crazy Ivan'
    let name1= 'bob'
    let name2= 'kevin'
    let name3= 'Chris P. Bacon'

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
      let stats3 = {
        strength: 14,
        dexterity: 10
      } 
      let src = 'https://placeimg.com/641/481/people'
      let src1 = 'https://placeimg.com/640/480/people'
      let src2 = 'https://placeimg.com/642/482/people'
      let src3 = 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjX-sfhsYriAhUFvZ4KHdyICK8QjRx6BAgBEAU&url=https%3A%2F%2Fwww.bbc.com%2Fnews%2Fscience-environment-43928318&psig=AOvVaw0njEheShFm7OS__61R7uk9&ust=1557351815519066'
  return (
    <div>
      <div id="j1" className="jumbotron col-12" >
        <div>
          <PreMadeChar stats={stats} src={src} name={name}/>
          <br></br>
          <PreMadeChar stats={stats1} src={src1} name={name1}/>
          <br></br>
          <PreMadeChar stats={stats2} src={src2} name={name2}/>
          <br></br>
          <PreMadeChar stats={stats3} src={src3} name={name3}/>
          <br></br>
        </div>
      </div>
    </div>
  )
}


export default Jumbotron1;