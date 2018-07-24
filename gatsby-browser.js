import React from "react";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import PropTypes from "prop-types";
import store from "./src/redux/store";
import { setPhrase } from "./src/redux/modules/search/people/people";
import {
  setPerson,
  setPersonToken
} from "./src/redux/modules/search/person/person";
import extractQueryString from "./src/utilities/js/extractQueryString";

exports.onClientEntry = () => {
  // This function fires onloading the page.
  const phrase = extractQueryString("phrase", window.location.search);
  const person = extractQueryString("person", window.location.search);

  if (phrase) {
    store.dispatch(setPhrase(phrase));
  }
  if (person) {
    store.dispatch(setPerson(person));
    store.dispatch(setPersonToken(person));
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

  ConnectedRouterWrapper.propTypes = {
    children: PropTypes.node.isRequired
  };

  return ConnectedRouterWrapper;
};
