import React from 'react';
import { connect } from 'react-redux';
import GuessContainer from './guessContainer';
import { generateNewGame, changeModalState } from '../actions/index';
import Modal from './modal'
import * as actions from '../actions/index'

export function Gameboard(props){
  if (!props.gameOver) {
    props.dispatch(actions.fetchGuesses());
  };

  const modalValue = props.modal ? <Modal /> : undefined;
  return (
    <div className="container main">
      {modalValue}
      <div id="actionBar" className="container-fluid">
        <button id= "whatBtn" className="btn btn-primary" onClick={() => props.dispatch(changeModalState())}>WHAT?</button>
        <button id="newGameBtn" className="btn btn-danger" onClick={() => props.dispatch(generateNewGame())}>+NEW GAME</button>
      </div>
      <div id="centerDiv">
        <h1 className="title"><span className="hotTitle">Hot</span> <span className="orTitle">or</span> <span className="coldTitle">Cold?</span></h1>
        <GuessContainer />
      </div>
    </div>
  );
}

const mapStateToProps = (state, props) => ({
  modal: state.modal,
  gameOver: state.gameOver
});

export default connect(mapStateToProps)(Gameboard);
