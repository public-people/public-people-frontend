import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { updatePhrase } from './src/redux/modules/search';
import getUrlParameter from './src/utilities/js/getUrlParameter';


exports.onClientEntry = () => {
  const phrase = getUrlParameter('phrase');

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
