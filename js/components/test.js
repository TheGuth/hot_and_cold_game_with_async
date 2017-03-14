import React from 'react';
import { connect } from 'react-redux';

export function Test(props){
  return (
    <h1>{props.greet}</h1>
  );
}

const mapStateToProps = (state, props) => ({
  greet: "Hello"
});

export default connect(mapStateToProps)(Test);