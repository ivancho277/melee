import React from 'react';
import './style.css'


function PreMadeChar(props){
  return(
    <div>
      <div className= 'card'>
      <h3 className= 'card-text'>Name</h3>
      <img className= 'card-img-top' src= {props.src}/>
      <div className= 'card-body'>
        <div className= 'card'><u>Stats</u>
        Strength:{props.stats.strength} <br></br>
        Dexterity: {props.stats.strength}<br></br>
        HP: {props.stats.strength}
     </div>
      </div>
      </div>
    </div>
  )
}

export default PreMadeChar;