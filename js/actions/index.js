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

export const processUserGuess = (guess, e) => ({
  type: PROCESS_USER_GUESS,
  guess,
  e
});

export const changeModalState = () => ({
    type: CHANGE_MODAL_STATE
});

// GET
export const FETCH_FEWEST_GUESSES = 'FETCH_FEWEST_GUESSES';
export const fetchFewestGuesses = (data) => ({
  type: FETCH_FEWEST_GUESSES,
  fewestGuesses: data
});

export const FETCH_FEWEST_GUESSES_ERROR = 'FETCH_FEWEST_GUESSES_ERROR';
export const fetchFewestGuessesError = () => ({
  type: FETCH_FEWEST_GUESSES_ERROR
});

export const fetchGuesses = () => dispatch => {
  const url = new URL('http://localhost:8081/api/guesses');
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  }).then(data => {
    return dispatch(fetchFewestGuesses(data.guesses));
  }).catch(error => {
    dispatch(fetchFewestGuessesError(error));
  });
};

// POST
export const SAVE_FEWEST_GUESSES = 'SAVE_FEWEST_GUESSES';
export const saveFewestGuesses = (fewestGuesses) => ({
  type: SAVE_FEWEST_GUESSES,
  fewestGuesses: fewestGuesses
});

export const SAVE_FEWEST_GUESSES_ERROR = 'SAVE_FEWEST_GUESSES_ERROR';
export const saveFewestGuessesError = () => ({
  type: SAVE_FEWEST_GUESSES_ERROR
});

export const saveGuesses = fewestGuesses => dispatch => {
  const url = new URL('http://localhost:8081/api/guesses');
  const data = {guesses: fewestGuesses}

  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  }).then(data => {
    return dispatch(saveFewestGuesses);
  }).catch(error => {
    return dispatch(saveFewestGuessesError)
  });
};
