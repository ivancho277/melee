import React from 'react';
import './style.css'

function  CharacterCard(props){
  return (
<div>
  <div className="card" style={{width: 22 + 'rem'}}>
    <h3 className= 'card-text'></h3>
    <img className="card-img-top"/>
     <div className="card-body">
     <div  className= 'card'><u>Stats</u>
     Strength: <br></br>
     Dexterity: <br></br>
     HP: 
     </div>
      <p className="card-text">Select Character</p>
     </div>
     <button type="button" onClick={props.onCharacterSelect} class="btn btn-danger">Start Game</button>
  </div>
</div>
  )
}


export default CharacterCard;