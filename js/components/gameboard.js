import React from 'react';
import { connect } from 'react-redux';
import GuessContainer from './guessContainer';

export function Gameboard(props){
  return (
    <div>
      <button>WHAT?</button>
      <button>+NEW GAME</button>
      <div id="centerDiv">
        <h1>Hot or Cold?</h1>
        <GuessContainer />
      </div>
    </div>
  );
}

export default connect()(Gameboard);