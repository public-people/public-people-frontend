import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import initialState from './initialState';
import people from './modules/people';

/* eslint-disable no-underscore-dangle */
const loadDevTools = () => {
  if (process.env.NODE_ENV === 'development' && window.devToolsExtension) {
    return window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
  }

  return f => f;
};
/* eslint-enable */


export default createStore(
  combineReducers({
    people,
  }),
  initialState,
  compose(applyMiddleware(thunk), loadDevTools()),
);

