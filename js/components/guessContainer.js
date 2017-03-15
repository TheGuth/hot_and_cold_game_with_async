import React from 'react';
import { connect } from 'react-redux';
import DistancePrompt from './distanceprompt';
import GuessCounter from './guessCounter';
import GuessList from './guessList';
import GuessInput from './guessInput';

export default function GameContainer(){
  return(
    <div className="gameContainer">
      <DistancePrompt />
      <GuessInput />
      {/*<GuessCounter />*/}
      <GuessList />
    </div>
  );
}