import React from "react";
import ReactDice from "react-dice-complete";
import "react-dice-complete/dist/react-dice-complete.css";

class DiceComponent extends React.Component {

  state={
    roll: 0
  }
  
  
  componentWillUpdate= () => {
   // console.log("HEY YOU ROLL:" + this.state.roll)
  }
  componentDidUpdate() {
    console.log(this.props)
   // this.props.getNum(this.state.roll)
    //console.log("HEY YOU ROLL:" + this.state.roll)
  }
  
  render(props) {
    return (
      <div id="home-dice">
        <ReactDice
          disableIndividual={true}
          numDice={this.props.numDice}
          rollTime={1}
          rollDone={this.rollDoneCallback}
          faceColor="#ffffff"
          dotColor="#000000"
          ref={dice => (this.reactDice = dice)}
        />
        <button onClick={() => this.rollAll()}>ATTACK!!!</button>
      </div>
    );
  }

   rollAll = () => { 
     this.reactDice.rollAll();  
    console.log("hi");  
  };


  rollDoneCallback = num => {
    this.setState({
      roll: num
    })
    if(this.props.getNum){
      this.props.getNum(num)
    }
    console.log(`You rolled a ${num}`);
   
  };
}
export default DiceComponent;
