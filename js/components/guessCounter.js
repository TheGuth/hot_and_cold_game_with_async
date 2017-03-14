import React from 'react';
import { connect } from 'react-redux';

export function GuessCounter(props){
  return <h3>Guesses: {props.counter}</h3>
}

const mapStateToProps = (state, props) => ({
  counter : state.userGuesses.length
});

export default connect(mapStateToProps)(GuessCounter);