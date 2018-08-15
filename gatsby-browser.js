import React from "react";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import PropTypes from "prop-types";
import store from "./src/redux/store";
import { setPhrase } from "./src/redux/modules/search/people/people";
import { setPersonID } from "./src/redux/modules/search/person/person";
import extractQueryString from "./src/utilities/js/extractQueryString";
// The two plugins below are polyfills for IE 11.
import "whatwg-fetch";
import "core-js/es6/promise";

exports.onClientEntry = () => {
  const phrase = extractQueryString("phrase", window.location.search);
  const person = extractQueryString("person", window.location.search);
  const personID = Number(
    extractQueryString("personID", window.location.search)
  );
  const limit = extractQueryString("limit", window.location.search);
  const offset = extractQueryString("offset", window.location.search);
  console.log("personID", personID);

  if (phrase) {
    store.dispatch(setPhrase(phrase));
  }
  if (personID) {
    store.dispatch(setPersonID(personID));
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
