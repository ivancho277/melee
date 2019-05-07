import React from 'react'
import ReactDice from 'react-dice-complete'
import 'react-dice-complete/dist/react-dice-complete.css'

class DiceComponent extends React.Component {

  render(props) {
    return (
      <div>
        <ReactDice
          numDice={3}
          rollDone={this.rollDoneCallback}
          faceColor="#ffffff"
          dotColor="#000000"
          ref={dice => this.reactDice = dice}
        />
      </div>
    )
  }

  rollAll() {
    this.reactDice.rollAll()
  }

  rollDoneCallback(num) {
    console.log(`You rolled a ${num}`)
  }
}
export default DiceComponent;
