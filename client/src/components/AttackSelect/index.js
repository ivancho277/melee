import React, { Component } from "react";
import { List, ListItem } from "../List";
export default class AttackSelect extends Component {
  state = {
    //left alone when we start
    //when button clicked, show attributes, when clicked again, close attributes
    properties: {},
    HP: this.props.player.hitPoints,
    list: []
  };
  onClick = () => {
    let health = this.state.HP;
    health -= 10;
    this.setState({
      HP: health,
      properties: this.props.player
    });
  };

  buildProperties = () => {
    let listArr = [];
    for (let i = 1; i < 5; i++) {
      listArr.push(<ListItem />);
    }
    this.setState({ list: listArr });
  };
  render() {
    return (
      <div>
        <div className="col-md-3 mx-auto" id="column-0">
          <div className="card mb-4 box-shadow" id="player0">
            <div className="card-header text-center font-weight-bold">
              {this.props.player.playerName}
            </div>
            <div id="Player1Stats" style={{ display: "all" }}>
              <div>
                HP: {this.state.HP}
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: 100 + "%" }}
                    aria-valuenow="10"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    id="hp-progress-0"
                  />
                </div>
              </div>
            </div>
            <img
              className="card-img-top"
              src={this.props.player.src}
              alt="Thundarr"
              style={{ cursor: "pointer" }}
              id="player0-img"
            />

            <button onClick={this.onClick}>Properties</button>
          </div>
          <List>{this.list}</List>
        </div>
      </div>
    );
  }
}
