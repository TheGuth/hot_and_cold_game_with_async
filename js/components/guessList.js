import React from 'react';
import { connect } from 'react-redux';

export function GuessList(props){
  console.log(props);
  return <div>{props.guesses.map(guess => <span key={guess.num} className={guess.classType}>{guess.num} </span>)}</div>
}

const mapStateToProps = (state, props) => ({
  guesses : state.userGuesses,
});

export default connect(mapStateToProps)(GuessList);
