import React from "react";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import PropTypes from "prop-types";
import configureStore from "./src/redux/store";
import extractQueryString from "./src/utilities/js/extractQueryString";
// The two plugins below are polyfills for IE 11.
import "whatwg-fetch";
import "core-js/es6/promise";
import { getPeople } from "./src/redux/modules/search/people";
import { getPerson } from "./src/redux/modules/search/person";
import { setPageMetaOffset } from "./src/redux/modules/metadata/page";

export const store = configureStore();

const getDataOnRouteChangeOrEntry = () => {
  const phrase = extractQueryString("phrase", window.location.search) || "";
  const personID = Number(
    extractQueryString("personID", window.location.search)
  );
  const limit = Number(extractQueryString("limit", window.location.search));
  const offset = Number(extractQueryString("offset", window.location.search));
  if (window.location.pathname === "/person") {
    store.dispatch(setPageMetaOffset(offset));
    store.dispatch(getPerson(personID, limit, offset));
  }
  if (window.location.pathname === "/results") {
    store.dispatch(setPageMetaOffset(offset));
    store.dispatch(getPeople(phrase, limit, offset));
  }
};

exports.onClientEntry = () => {};

exports.onRouteUpdate = ({ location, action }) => {
  getDataOnRouteChangeOrEntry();
};

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
