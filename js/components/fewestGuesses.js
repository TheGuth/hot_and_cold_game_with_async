import React from 'react';
import { connect } from 'react-redux';

export function FewestGuesses(props){

  return <div className="guessCounter"><p>Fewest Guesses Taken: {props.fewestGuesses}</p></div>
}

const mapStateToProps = (state, props) => ({
  fewestGuesses: state.fewestGuesses
});

export default connect(mapStateToProps)(FewestGuesses);
