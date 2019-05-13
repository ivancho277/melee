import React from 'react';
import './style.css'

function  CharacterCard(props){
  return (
<div>
  <div idName = 'centerCard' className="card" style={{width: 22 + 'rem'}}>
    <h3 className= 'card-text'>{props.name}</h3>
    <img className="card-img-top" src={props.src}/>
     <div className="card-body">
     <div  className= 'card'><u>Stats</u>
     Strength: {props.strength}<br></br>
     Dexterity: {props.dexterity}<br></br>
     HP: {props.strength}
     </div>
      <p className="card-text">Select Character</p>
     </div>
     <button type="button" onClick={props.onCharacterSelect} class="btn btn-danger">Start Game</button>
  </div>
</div>
  )
}


export default CharacterCard;