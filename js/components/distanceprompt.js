import React from 'react';
import { connect } from 'react-redux';



export function DistancePrompt(props) {
  const target = props.targetNumber; // 42
  const thresholds = {hot: 5, mild: 10, cold: 20};

  const thresholdsResults = () => {
    for (let key in thresholds) {
      console.log(target);
      console.log(props.guess);
      if ( target - thresholds[key] <= props.guess && props.guess <= target + thresholds[key] ) {
        console.log(key);
        return key;
      }
    }
    return 'Freezing Cold';
  }

  thresholdsResults();


  return (
    <h2>{thresholdsResults}</h2>
  );
}

const mapStateToProps = (state, props) => ({
  targetNumber: state.targetNumber,
  guess: state.userGuesses[state.userGuesses.length - 1]
});

export default connect(mapStateToProps)(DistancePrompt);
