import React from 'react'
import ReactDice from 'react-dice-complete'
import 'react-dice-complete/dist/react-dice-complete.css'

class DiceComponent extends React.Component {
 getRoll = () => {
   this.props.getRoll = this.rollAll();
 }
  render(props) {
    return (
      <div id="home-dice">
        <ReactDice
         disableIndividual={true}
          numDice={2}
          rollTime={1}
          rollDone={this.rollDoneCallback}
          faceColor="#ffffff"
          dotColor="#000000"
          ref={dice => this.reactDice = dice}
          
        />
        <button onClick={this.rollAll}>Roll Dice</button>
      </div>
    )
  }

  rollAll = () => {
    this.reactDice.rollAll()
    console.log('hi')
    }

  rollDoneCallback = (num) =>{
    console.log(`You rolled a ${num}`)
  }
}
export default DiceComponent;
