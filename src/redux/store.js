import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import initialState from './initialState';
import search from './modules/search';


/* eslint-disable no-underscore-dangle */
export default createStore(
  combineReducers({
    search,
  }),
  initialState,
  composeWithDevTools(),
);
/* eslint-enable */
