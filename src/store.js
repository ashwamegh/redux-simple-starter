// Api to create redux store;
import { createStore } from 'redux';
//  Our root reducer
import {rootReducer} from './reducers/index';
// Global Store containing root reducer
export const mainStore = () => createStore(rootReducer);
