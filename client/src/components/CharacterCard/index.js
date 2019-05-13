import React from "react";
import "./style.css";
// import icon01 from "../../pages/gamePieceImages/MeleeGamePieces-01.jpg";

function CharacterCard(props) {
  return (
    <div className="row char-section" idName="tbd2">
      <div className="col-2" idName="tbd3">
        <div idName="centerCard" className="card" style={{ width: 22 + "rem" }}>
          <h3 className="card-text">{props.name}</h3>
          <img className="card-img-top" src={props.src} />
          <div className="card-body">
            <div className="card">
              <u>Stats</u>
              Strength: {props.strength}
              <br />
              Dexterity: {props.dexterity}
              <br />
              HP: {props.strength}
            </div>
            {/* <img src={icon01} />
            <img
              src={require("../../pages/gamePieceImages/MeleeGamePieces-01.jpg")} */}
            <p className="card-text">Select Character</p>
          </div>
          <button
            type="button"
            onClick={props.onCharacterSelect}
            class="btn btn-danger"
          >
            Start Game
          </button>
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;
