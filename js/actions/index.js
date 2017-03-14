//actions needed
//generate a new random number and hot and cold deviations from that number
//(ex: num 40, hot is 30-50, cold is outside of that range)
//user inputs guess and check to see if correct
//----save user guess
//----check to see if guess is correct
//--------if correct, prompt user
//--------if incorrect, add number to guess list and prompt for new guess

export const GENERATE_NEW_GAME = 'GENERATE_NEW_GAME';
export const PROCESS_USER_GUESS = 'PROCESS_USER_GUESS';
export const CHANGE_MODAL_STATE = 'CHANGE_MODAL_STATE';
export const PROCESS_USER_INPUT = 'PROCESS_USER_INPUT';

export const generateNewGame = () => ({
  type: GENERATE_NEW_GAME
});

export const processUserInput = (userInput) => ({
  type: PROCESS_USER_INPUT,
  userInput
});

export const processUserGuess = (guess) => ({
  type: PROCESS_USER_GUESS,
  guess
});

export const changeModalState = () => ({
    type: CHANGE_MODAL_STATE
});
