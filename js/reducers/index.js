import * as actions from '../actions/index';

const initialState = {
  targetNumber: null,
  // hotAndColdTargets: {
  //   hot: [this.targetNumber - 5, this.targetNumber + 5],
  //   cold: [this.targetNumber - 6, this.targetNumber + 6]
  // },
  userGuesses: [],
  amountOfGuesses: function(){
    return this.userGuesses.length;
  }
};

export const gameReducer = (state=initialState, action) => {
    switch(action.type){
      case('GENERATE_NEW_TARGET'):
        return Object.assign({}, state, {targetNumber: Math.floor(Math.random() * 100)});
      case('CHECK_USER_GUESS'):
        console.log(state.amountOfGuesses());
        return Object.assign({}, state, {userGuesses: [...state.userGuesses, action.guess]});
      default:
        return state;
    }
};