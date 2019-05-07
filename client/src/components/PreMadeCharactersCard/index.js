import React from 'react';
import './style.css'

<<<<<<< HEAD
function PreMadeChar(props) {
=======

export function PreMadeChar1(props) {
>>>>>>> 3661126e31d3c35c40ca43d663b37b8265ddb74f
  return (
    <div>
      <div className='card' style={{width: 18 + 'rem'}} >
        <h3 className='card-text'>{props.name}</h3>
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

<<<<<<< HEAD
export default PreMadeChar;
=======

export function PreMadeChar2(props) {
  return (
    <div>
      <div className='card'>
        <h3 className='card-text'>{props.name}</h3>
        <img className='card-img-top' src={props.src} />
        <div className='card-body'>
          <div className='card'><u>Stats</u>
            Strength:{props.stats.strength} <br></br>
            Dexterity: {props.stats.strength}<br></br>
            HP: {props.stats.strength}
          </div>
          <p className='card-text'>words words words</p>
        </div>
        <button type="button" class="btn btn-warning">Select</button>
      </div>
    </div>
  )
}

export function PreMadeChar3(props) {
  return (
    <div>
      <div className='card'>
        <h3 className='card-text'>{props.name}</h3>
        <img className='card-img-top' src={props.src} />
        <div className='card-body'>
          <div className='card'><u>Stats</u>
            Strength:{props.stats.strength} <br></br>
            Dexterity: {props.stats.strength}<br></br>
            HP: {props.stats.strength}
          </div>
          <p className='card-text'>words words words</p>
        </div>
        <button type="button" class="btn btn-warning">Select</button>
      </div>
    </div>
  )
}


export function PreMadeChar4(props) {
  return (
    <div>
      <div className='card'>
        <h3 className='card-text'>{props.name}</h3>
        <img className='card-img-top' src={props.src} />
        <div className='card-body'>
          <div className='card'><u>Stats</u>
            Strength:{props.stats.strength} <br></br>
            Dexterity: {props.stats.strength}<br></br>
            HP: {props.stats.strength}
          </div>
          <p className='card-text'>words words words</p>
        </div>
        <button type="button" class="btn btn-warning">Select</button>
      </div>
    </div>
  )
}
>>>>>>> 3661126e31d3c35c40ca43d663b37b8265ddb74f
