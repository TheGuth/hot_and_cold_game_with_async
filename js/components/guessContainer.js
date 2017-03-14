import React from 'react';
import { connect } from 'react-redux';
import { processUserGuess, processUserInput } from '../actions/index';
import DistancePrompt from './distanceprompt';
import GuessCounter from './guessCounter';
import GuessList from './guessList';

export function GameContainer(props){
  return(
    <div>
      <DistancePrompt />
      <form action="#" onSubmit={() => props.dispatch(processUserGuess(props.userInput))}>
        <input type="text" placeholder="What's your guess?" value={props.userInput} onChange={(event) => props.dispatch(processUserInput(event.target.value))}/>
        <input type="submit" value="GUESS"/>
      </form>
      <GuessCounter />
      <GuessList />
    </div>
  );
}

const mapStateToProps = (state, props) => ({
  userInput : state.userInput
});

export default connect(mapStateToProps)(GameContainer);
