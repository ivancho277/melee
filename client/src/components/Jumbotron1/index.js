import React from 'react';
import './style.css'
import PreMadeChar from '../PreMadeCharactersCard'


function Jumbotron1(props) {
  return (
    <div>
      <div id="j1" className="jumbotron " >
        <div>
          <PreMadeChar stats={props.stats} src={props.src}/>
          <PreMadeChar stats={props.stats} src={props.src}/>
          <PreMadeChar stats={props.stats} src={props.src}/>
          <PreMadeChar stats={props.stats} src={props.src}/>
        </div>
      </div>
    </div>
  )
}


export default Jumbotron1;