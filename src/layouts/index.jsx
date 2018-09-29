import React from "react";
import PropTypes from "prop-types";
import "normalize.css";
import { Provider } from "react-redux";
import configureStore from "./../redux/store";
import "./../utilities/css";

import extractQueryString from "../utilities/js/extractQueryString";
import { getPeople } from "../redux/modules/search/people";
import { getPerson } from "../redux/modules/search/person";
import { setPageMetaOffset } from "../redux/modules/metadata/page";

const store = configureStore();

const getDataOnRouteChangeOrEntry = ({ location }) => {
  const phrase = extractQueryString("phrase", location.search) || "";
  const personID = Number(extractQueryString("personID", location.search));
  const limit = Number(extractQueryString("limit", location.search));
  const offset = Number(extractQueryString("offset", location.search));
  if (location.pathname === "/person") {
    store.dispatch(setPageMetaOffset(offset));
    store.dispatch(getPerson(personID, limit, offset));
  }
  if (location.pathname === "/results") {
    store.dispatch(setPageMetaOffset(offset));
    store.dispatch(getPeople(phrase, limit, offset));
  }
};

export default function Layout({ children, location }) {
  getDataOnRouteChangeOrEntry({ location });
  return <Provider {...{ store }}>{children()}</Provider>;
}

Layout.propTypes = {
  children: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired
};
