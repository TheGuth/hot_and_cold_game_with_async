import React from 'react';
import { connect } from 'react-redux';
import { processUserGuess, processUserInput } from '../actions/index';
import * as actions from '../actions/index';

export function GuessInput(props){
  if (props.gameOver) {
    props.dispatch(actions.saveGuesses(props.userGuesses.length));
  }
  return (
    <form action="#" onSubmit={(e) => props.dispatch(processUserGuess(props.userInput, e))}>
        <div className="input-group guessBar">
          <input type="text" className="form-control" placeholder="What's your guess?" value={props.userInput} onChange={(event) => props.dispatch(processUserInput(event.target.value))}/>
          <span className="input-group-btn">
            <button type="submit" className="btn btn-primary">GUESS</button>
          </span>
        </div>
    </form>
  );
}

const mapStateToProps = (state, props) => ({
  userInput : state.userInput,
  userGuesses: state.userGuesses,
  gameOver: state.gameOver
});

export default connect(mapStateToProps)(GuessInput);
