import React from 'react';
import { connect }  from 'react-redux';
import { changeModalState } from '../actions/index';

export function Modal(props){
  return (
    <div>
      <h1>This is the modal, how to play is so ovbious that if you have clicked this button you seriously need help!</h1>
    </div>
  );
}

export default connect()(Modal);
