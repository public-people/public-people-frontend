import React from "react";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import PropTypes from "prop-types";
import { store } from "./configureStore";
import "whatwg-fetch";
import "core-js/es6/promise";

exports.onClientEntry = () => {};

exports.replaceRouterComponent = ({ history }) => {
  /* eslint-disable react/jsx-filename-extension */
  /* Gatsby requires that this file be '.js' */
  const ConnectedRouterWrapper = ({ children }) => (
    <Provider store={store}>
      <Router {...{ history }}>{children}</Router>
    </Provider>
  );
  /* eslint-enable */

  ConnectedRouterWrapper.propTypes = {
    children: PropTypes.node.isRequired
  };

  return ConnectedRouterWrapper;
};
