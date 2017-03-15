import React from 'react';
import { connect } from 'react-redux';
import { processUserGuess, processUserInput } from '../actions/index';

export function GuessInput(props){
  return (
    <form action="#" onSubmit={() => props.dispatch(processUserGuess(props.userInput))}>
        <div className="input-group">
          <input type="text" className="form-control" placeholder="What's your guess?" value={props.userInput} onChange={(event) => props.dispatch(processUserInput(event.target.value))}/>
          <span className="input-group-btn">
            <button type="submit" className="btn btn-primary">GUESS</button>
          </span>
        </div>
    </form>
  );
}

const mapStateToProps = (state, props) => ({
  userInput : state.userInput
});

export default connect(mapStateToProps)(GuessInput);

