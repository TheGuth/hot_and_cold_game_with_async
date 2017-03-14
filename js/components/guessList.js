import React from 'react';
import { connect } from 'react-redux';

export function GuessList(props){
  console.log(props);
  return <div>{props.guesses.map(guess => <span key={guess} className={props.temp.toLowerCase()}>{guess} </span>)}</div>
}

const mapStateToProps = (state, props) => ({
  guesses : state.userGuesses,
  temp : state.currentTemp
});

export default connect(mapStateToProps)(GuessList);