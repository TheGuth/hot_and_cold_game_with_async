import * as actions from './actions/index';
import store from './store';
require('babel-polyfill');
store.dispatch(actions.generateNewGame());
store.dispatch(actions.processUserGuess(42));
store.dispatch(actions.processUserGuess(43));
store.dispatch(actions.processUserGuess(12));
store.dispatch(actions.processUserGuess(90));
store.dispatch(actions.processUserGuess(11));
store.dispatch(actions.processUserGuess(1));
store.dispatch(actions.processUserGuess(44));
store.dispatch(actions.processUserGuess(3));
store.dispatch(actions.changeModalState());
store.dispatch(actions.changeModalState());
store.dispatch(actions.changeModalState());

console.log(store.getState());
