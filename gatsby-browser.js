import React from "react";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import PropTypes from "prop-types";
import configureStore from "./src/redux/store";
import extractQueryString from "./src/utilities/js/extractQueryString";
// The two plugins below are polyfills for IE 11.
import "whatwg-fetch";
import "core-js/es6/promise";

const store = configureStore();

exports.onClientEntry = () => {
  const phrase = extractQueryString("phrase", window.location.search);
  const person = extractQueryString("person", window.location.search);
  const personID = Number(
    extractQueryString("personID", window.location.search)
  );
  const limit = extractQueryString("limit", window.location.search);
  const offset = extractQueryString("offset", window.location.search);
};

exports.replaceRouterComponent = ({ history }) => {
  /* eslint-disable react/jsx-filename-extension */
  /* Gatsby requires that this file be '.js' */
  console.log("storer", store);
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
