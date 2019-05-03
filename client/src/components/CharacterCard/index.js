import React from 'react';
import './style.css'

function  CharacterCard(props){
  return (
<div>
  <div className="card" style={{width: 22 + 'rem'}}>
    <h3 className= 'card-text'>Name: {props.name}</h3>
    <img className="card-img-top" src={ props.src } alt="Card cap"/>
     <div className="card-body">
     <div  className= 'card'><u>Stats</u>
     Strength: {props.stats.strength}<br></br>
     Dexterity: {props.stats.dexterity}<br></br>
     HP: {props.stats.strength}
     </div>
      <p className="card-text">Is Cold and Dangerous in Mother Russia</p>
     </div>
  </div>
</div>
  )
}


export default CharacterCard;