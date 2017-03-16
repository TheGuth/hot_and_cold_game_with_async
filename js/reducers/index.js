import * as actions from '../actions/index';

const initialState = {
  targetNumber: Math.floor(Math.random() * 100) + 1,
  userGuesses: [],
  modal: false,
  userInput: '',
  currentTemp: '',
  fewestGuesses: undefined,
  gameOver: false
};

const thresholds = {Blazing: 2, Hot: 5, Mild: 10, Cold: 20};

function checkUserGuess(guess, target, userGuesses){
    if (guess > 100 || isNaN(guess) || guess < 1) {
      return {prompt: 'You must guess a number between 1 and 100!', classType: '', invalid: true}
    }

    for (let currentGuess of userGuesses) {
      if (guess === currentGuess.num) {
        return {prompt: 'You already guessed that!', classType: '', invalid: true}
      }
    }

    if(guess == target){
      return {prompt: `Correct, you won! The target number was indeed, ${target}!`, classType: 'success', gameOver: true};
    }

    for (let key in thresholds) {
      if ( target - thresholds[key] <= guess && guess <= target + thresholds[key] ) {
        return {prompt: `You are currently: ${key}`, classType: key.toLowerCase()};
      }
    }
    return {prompt: 'You are currently: Freezing', classType: 'freezing'};
}

export const gameReducer = (state=initialState, action) => {
    switch(action.type){
      case actions.GENERATE_NEW_GAME:
        return {...state, ...initialState, targetNumber: Math.floor(Math.random() * 100) + 1};
      case actions.PROCESS_USER_INPUT:
        return {...state, userInput: action.userInput};
      case actions.PROCESS_USER_GUESS:
        action.e.preventDefault();
        const {prompt, classType, invalid, gameOver} = checkUserGuess(action.guess, state.targetNumber, state.userGuesses);
        if (invalid) {
          return {...state, currentTemp: prompt, userInput: ''};
        }
        return {...state, userGuesses: [...state.userGuesses, {num: action.guess, prompt, classType}], userInput: '', currentTemp: prompt, gameOver: gameOver};
      case actions.CHANGE_MODAL_STATE:
        return {...state, modal: !state.modal};
      case actions.FETCH_FEWEST_GUESSES:
        return {...state, fewestGuesses: action.fewestGuesses}
      case actions.FETCH_FEWEST_GUESSES_ERROR:
        console.error(action.error);
        return state;
      case actions.SAVE_FEWEST_GUESSES:
        return {...state, fewestGuesses: action.fewestGuesses}
      case actions.SAVE_FEWEST_GUESSES_ERROR:
        console.error(action.error);
        return state;
      default:
        return state;
    }
};
