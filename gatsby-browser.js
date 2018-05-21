import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { parse } from 'query-string';
import store from './src/redux/store';
import { updatePhrase } from './src/redux/modules/search';


exports.onClientEntry = () => {
  const { phrase } = parse(window.location.search);

  if (phrase) {
    store.dispatch(updatePhrase(phrase));
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
