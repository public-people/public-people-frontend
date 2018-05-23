import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { setPhrase } from './src/redux/modules/people';
import extractQueryString from './src/utilities/js/extractQueryString';


exports.onClientEntry = () => {
  const phrase = extractQueryString('phrase', window.location.search);

  if (phrase) {
    store.dispatch(setPhrase(phrase));
  }
};


exports.replaceRouterComponent = ({ history }) => {
  /* eslint-disable react/jsx-filename-extension */
  /* Gatsby requires that this file be '.js' */
  const ConnectedRouterWrapper = ({ children }) => (
    <Provider {...{ store }}>
      <Router {...{ history }}>{children}</Router>
    </Provider>
  );
  /* eslint-enable */

  return ConnectedRouterWrapper;
};
