import * as actions from '../actions/index';

const initialState = {
  targetNumber: null, 
  userGuesses: [],
  modal: false,
  userInput: '',
  currentTemp: ''
};

const thresholds = {Blazing: 2, Hot: 5, Mild: 10, Cold: 20};

function checkUserGuess(guess, target){
    if(guess == target){
      return `Correct, you won! The target number was indeed, ${target}!`;
    }
    for (let key in thresholds) {
      if ( target - thresholds[key] <= guess && guess <= target + thresholds[key] ) {
        return `You are currently: ${key}`;
      }
    }
    if(guess === undefined){
      return 'Hey you! Guess a number!';
    }
    return 'You are currently: Freezing Cold';
}

export const gameReducer = (state=initialState, action) => {
    switch(action.type){
      case actions.GENERATE_NEW_GAME:
        return {...state, targetNumber: Math.floor(Math.random() * 100) + 1};
      case actions.PROCESS_USER_INPUT:
        return {...state, userInput: action.userInput};
      case actions.PROCESS_USER_GUESS:
        const checkResult = checkUserGuess(action.guess, state.targetNumber);
        return {...state, userGuesses: [...state.userGuesses, action.guess], userInput: '', currentTemp: checkResult};
      case actions.CHANGE_MODAL_STATE:
        return {...state, modal: !state.modal};
      default:
        return state;
    }
};
