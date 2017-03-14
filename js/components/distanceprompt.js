import React from 'react';
import { connect } from 'react-redux';
import { updateCurrentTemp } from '../actions/index';

export function DistancePrompt(props) {
  return <h2>{props.currentTemp}</h2>;
}

const mapStateToProps = (state, props) => ({
  currentTemp: state.currentTemp
});

export default connect(mapStateToProps)(DistancePrompt);
