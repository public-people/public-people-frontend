import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import initialState from './initialState';
import people from './modules/people';


/* eslint-disable no-underscore-dangle */
export default createStore(
  combineReducers({
    people,
  }),
  initialState,
  composeWithDevTools(applyMiddleware(thunk)),
);
/* eslint-enable */
