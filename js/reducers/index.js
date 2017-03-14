import * as actions from '../actions/index';

const initialState = {
  targetNumber: null, 
  userGuesses: [],
  modal: false,
  userInput: '',
  currentTemp: ''
};

export const gameReducer = (state=initialState, action) => {
    switch(action.type){
      case('GENERATE_NEW_GAME'):
        return {...state, targetNumber: Math.floor(Math.random() * 100) + 1};
      case('PROCESS_USER_INPUT'):
        return {...state, userInput: action.userInput};
      case('PROCESS_USER_GUESS'):
        return {...state, userGuesses: [...state.userGuesses, action.guess], userInput: ''};
      case('UPDATE_CURRENT_TEMP'):
        return {...state, currentTemp: action.newTemp}
      case('CHANGE_MODAL_STATE'):
         return {...state, modal: !state.modal};
      default:
        return state;
    }
};
