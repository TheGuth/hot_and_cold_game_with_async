import * as actions from './actions/index';
import store from './store';
require('babel-polyfill');
store.dispatch(actions.generateNewTarget());
store.dispatch(actions.checkUserGuess(42));
store.dispatch(actions.checkUserGuess(43));
store.dispatch(actions.checkUserGuess(12));
store.dispatch(actions.checkUserGuess(90));
store.dispatch(actions.checkUserGuess(11));
store.dispatch(actions.checkUserGuess(1));
store.dispatch(actions.checkUserGuess(44));
store.dispatch(actions.checkUserGuess(3));

console.log(store.getState());

