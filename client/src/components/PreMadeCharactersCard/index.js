import React from 'react';
import './style.css'

function PreMadeChar(props) {
  return (
    <div>
      <div className='card' style={{width: 18 + 'rem'}} >
        <h3 className='card-text'>{props.stats.name}</h3>
        <div className='card-body'>
          <div className='card'><u>Stats</u>
            Strength:{props.stats.strength} <br></br>
            Dexterity: {props.stats.dexterity}<br></br>
            HP: {props.stats.strength}
          </div>
          <p className='card-text'>words words words</p>
        </div>
        <button type="button" class="btn btn-warning">Select</button>

      </div>
    </div>
  )
}

export default PreMadeChar;
