import React from 'react';
import { connect } from 'react-redux';
import { updateCurrentTemp } from '../actions/index';



export function DistancePrompt(props) {
  const target = props.targetNumber;
  const thresholds = {Blazing: 2, Hot: 5, Mild: 10, Cold: 20};
  const thresholdsResults = (() => {
    if(props.guess == target){
      return `Correct, you won! The target number was indeed, ${target}!`;
    }
    for (let key in thresholds) {
      if ( target - thresholds[key] <= props.guess && props.guess <= target + thresholds[key] ) {
        return `You are currently: ${key}`;
      }
    }
    if(props.guess === undefined){
      return 'Hey you! Guess a number!';
    }
    return 'You are currently: Freezing Cold';
  })();

  return (
    <h2>{thresholdsResults}</h2>
  );
}

const mapStateToProps = (state, props) => ({
  targetNumber: state.targetNumber,
  guess: state.userGuesses[state.userGuesses.length - 1]
});

export default connect(mapStateToProps)(DistancePrompt);
