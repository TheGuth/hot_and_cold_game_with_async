import * as actions from '../actions/index';

const initialState = {
  targetNumber: null, 
  userGuesses: [],
  modal: false,
  userInput: ''
};

export const gameReducer = (state=initialState, action) => {
    switch(action.type){
      case('GENERATE_NEW_GAME'):
        return Object.assign({}, state, {targetNumber: Math.floor(Math.random() * 100) + 1});
      case('PROCESS_USER_INPUT'):
        return Object.assign({}, state, {userInput: action.userInput});
      case('PROCESS_USER_GUESS'):
        return Object.assign({}, state, {userGuesses: [...state.userGuesses, action.guess]});
      case('CHANGE_MODAL_STATE'):
         return Object.assign({}, state, {modal: !state.modal})
      default:
        return state;
    }
};
