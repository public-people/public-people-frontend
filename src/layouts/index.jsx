import React, { Component } from "react";
import PropTypes from "prop-types";
import "normalize.css";
import { Provider } from "react-redux";
import configureStore from "./../redux/store";
import "./../utilities/css";
import onRouteChangeOrEntry from "../onRouteChangeOrEntry";

const store = configureStore();

export default function Layout({ children, location }) {
  onRouteChangeOrEntry({ location }, store);
  return <Provider {...{ store }}>{children()}</Provider>;
}

Layout.propTypes = {
  children: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired
};
