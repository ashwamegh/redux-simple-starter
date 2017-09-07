import { combineReducers } from 'redux';

import { counterReducer } from './reducer_counter';

// Using combineReducers Api from redux to combine multiple reducers
export const rootReducer = combineReducers({
  CounterReducer: counterReducer
});