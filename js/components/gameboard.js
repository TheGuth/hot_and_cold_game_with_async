import React from 'react';
import { connect } from 'react-redux';
import GuessContainer from './guessContainer';
import { generateNewGame } from '../actions/index';

export function Gameboard(props){
  props.dispatch(generateNewGame());
  return (
    <div>
      <button>WHAT?</button>
      <button onClick={() => props.dispatch(generateNewGame())}>+NEW GAME</button>
      <div id="centerDiv">
        <h1>Hot or Cold?</h1>
        <GuessContainer />
      </div>
    </div>
  );
}

export default connect()(Gameboard);
