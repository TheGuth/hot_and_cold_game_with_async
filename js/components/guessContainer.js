import React from 'react';
import { connect } from 'react-redux';
import { processUserGuess, processUserInput } from '../actions/index';

export function GameContainer(props){
  return(
    <form action="#" onSubmit={() => props.dispatch(processUserGuess(props.userInput))}>
      <input type="text" placeholder="What's your guess?" value={props.userInput} onChange={(event) => props.dispatch(processUserInput(event.target.value))}/><br/>
      <input type="submit" value="GUESS"/>
    </form>
  );
}

const mapStateToProps = (state, props) => ({
  userInput : state.userInput
});

export default connect(mapStateToProps)(GameContainer);