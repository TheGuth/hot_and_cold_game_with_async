import React from 'react';
import { connect } from 'react-redux';

export function GuessCounter(props){
  if(props.counter === undefined || props.counter === 0){
    return null;
  }
  return <div className="guessCounter"><p>Guesses: {props.counter}</p></div>
}

const mapStateToProps = (state, props) => ({
  counter : state.userGuesses.length
});

export default connect(mapStateToProps)(GuessCounter);