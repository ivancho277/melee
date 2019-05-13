import React, { Component } from "react";
import {
  GridGenerator,
  Layout,
  Hexagon,
  Text,
  Pattern,
  HexUtils
} from "react-hexgrid";
import "./GameLayout.css";
import player from "../../pages/gamePieceImages/MeleeGamePieces-01.jpg";
import { log } from "handlebars";
class GameLayout extends Component {
  constructor(props) {
    super(props);
    const hexagons = GridGenerator.hexagon(5);
    // Add custom prop to couple of hexagons to indicate them being blocked
    // hexagons[0].blocked = true;
    hexagons[1].blocked = true;

    const playerPattern = <Pattern id="player-pat" link={player} />;
    //const playerHex = <Hexagon  q={0} r={0} s={0} fill="player-pat" />
    // this.state = currenthex; //keep track of where character gets dropped
    //this.state = HexUtils.neighbours(currenthex) //state of all neighbors to current position.
    let rand1 = Math.floor(Math.random() * 90 + 1);
    let rand2 = Math.floor(Math.random() * 90 + 1);
    let rand3 = Math.floor(Math.random() * 90 + 1);

    console.log(rand1, rand2, rand3);
    hexagons[rand1].image = player;
    hexagons[rand1].text = "monster";
    console.log(hexagons[rand1].q);
    hexagons[rand2].image = player;
    hexagons[rand2].text = "monster";
    hexagons[rand3].image = player;
    hexagons[rand3].text = "monster";
    const monstersArr = [hexagons[rand1], hexagons[rand2], hexagons[rand3]];
    console.log(monstersArr);

    //console.log(this.state)
    //console.log(hexagons)
    hexagons[50].image = player;
    hexagons[50].text = "player";
    this.state = { hexagons, monstersArr };
    console.log(this.state);
  }

  //function to pick random numnber not including 50, or other numbers returns array of 3 numbers.
  pickRandomMonsters = () => {
    let randomArray = [50];
    for(let i = 0; i < 3; i++){
      let rand =  Math.floor(Math.random() * 90 + 1);

    }
  }

  // onDrop you can read information of the hexagon that initiated the drag
  onDrop(event, source, targetProps) {
    const { hexagons } = this.state;
    const { monstersArr } = this.state;
    const { button } = this.state;

    console.log(monstersArr);
    const hexas = hexagons.map(hex => {
      // When hexagon is dropped on this hexagon, copy it's image and text
      if (HexUtils.equals(source.state.hex, hex)) {
        hex.image = targetProps.data.image;
        hex.text = targetProps.data.text;
      }
      return hex;
    });

    let near = false;
    let neightborsArr = HexUtils.neighbours(source.state.hex);
    for (let i = 0; i < neightborsArr.length; i++) {
      for (let j = 0; j < monstersArr.length; j++) {
        if (
          monstersArr[j].q === neightborsArr[i].q &&
          monstersArr[j].r === neightborsArr[i].r &&
          monstersArr[j].s === neightborsArr[i].s
        ) {
          console.log("ENTER COMBAT!");
          near = true;
        }
      }
    }
   


    this.props.isEnemyNear(near);
    console.log("====================================");
    console.log(neightborsArr);
    console.log("====================================");

    this.setState({ hexagons: hexas });
  }

  onDragStart(event, source) {
    // If this tile is empty, let's disallow drag
    if (!source.props.data.text) {
      event.preventDefault();
    }
  }

  // Decide here if you want to allow drop to this node
  onDragOver(event, source) {
    // Find blocked hexagons by their 'blocked' attribute
    const blockedHexas = this.state.hexagons.filter(h => h.blocked);
    // Find if this hexagon is listed in blocked ones
    const blocked = blockedHexas.find(blockedHex => {
      return HexUtils.equals(source.state.hex, blockedHex);
    });

    const { text } = source.props.data;
    // Allow drop, if not blocked and there's no content already
    if (!blocked && !text) {
      // Call preventDefault if you want to allow drop
      event.preventDefault();
    }
  }

  // onDragEnd you can do some logic, e.g. to clean up hexagon if drop was success
  onDragEnd(event, source, success) {
    if (!success) {
      return;
    }
    // TODO Drop the whole hex from array, currently somethings wrong with the patterns

    const { hexagons } = this.state;
    // When hexagon is successfully dropped, empty it's text and image
    const hexas = hexagons.map(hex => {
      if (HexUtils.equals(source.state.hex, hex)) {
        hex.text = null;
        hex.image = null;
      }
      return hex;
    });
    this.setState({ hexagons: hexas });
  }

  render() {
    let { hexagons } = this.state;

    return (
      <Layout
        className="game"
        size={{ x: 5, y: 5 }}
        flat={true}
        spacing={1.08}
        origin={{ x: -30, y: 0 }}
      >
        {hexagons.map((hex, i) => (
          <Hexagon
            key={i}
            q={hex.q}
            r={hex.r}
            s={hex.s}
            className={hex.blocked ? "blocked" : null}
            fill={hex.image ? HexUtils.getID(hex) : null}
            data={hex}
            onDragStart={(e, h) => this.onDragStart(e, h)}
            onDragEnd={(e, h, s) => this.onDragEnd(e, h, s)}
            onDrop={(e, h, t) => this.onDrop(e, h, t)}
            onDragOver={(e, h) => this.onDragOver(e, h)}
          >
            <Text>{hex.text || HexUtils.getID(hex)}</Text>
            {hex.image && <Pattern id={HexUtils.getID(hex)} link={hex.image} />}
          </Hexagon>
        ))}
      </Layout>
    );
  }
}

export default GameLayout;
