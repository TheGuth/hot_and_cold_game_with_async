import React from 'react';
import { connect } from 'react-redux';
import GuessContainer from './guessContainer';
import { generateNewGame } from '../actions/index';

export function Gameboard(props){
  props.dispatch(generateNewGame());
  return (
    <div className="container main">
      <div id="actionBar" className="container-fluid">
        <button id= "whatBtn" className="btn btn-info">WHAT?</button>
        <button id="newGameBtn" className="btn btn-success" onClick={() => props.dispatch(generateNewGame())}>+NEW GAME</button>
      </div>
      <div id="centerDiv">
        <h1 className="title"><span className="hotTitle">Hot</span> or <span className="coldTitle">Cold?</span></h1>
        <GuessContainer />
      </div>
    </div>
  );
}

export default connect()(Gameboard);
