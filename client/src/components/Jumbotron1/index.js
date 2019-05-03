import React from 'react';
import './style.css'
import PreMadeChar from '../PreMadeCharactersCard'


function Jumbotron1(props) {
  return (
    <div>
      <div id="j1" className="jumbotron " >
        <div>
          <PreMadeChar stats={props.stats} src={props.src} name={props.name}/>
          <PreMadeChar stats={props.stats} src={props.src} name={props.name}/>
          <PreMadeChar stats={props.stats} src={props.src} name={props.name}/>
          <PreMadeChar stats={props.stats} src={props.src} name={props.name}/>
        </div>
      </div>
    </div>
  )
}


export default Jumbotron1;