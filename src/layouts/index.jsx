import React from "react";
import PropTypes from "prop-types";
import "normalize.css";
import { Provider } from "react-redux";
import configureStore from "./../redux/store";
import "./../utilities/css";

const store = configureStore();

export default function Layout({ children }) {
  return <Provider {...{ store }}>{children()}</Provider>;
}

Layout.propTypes = {
  children: PropTypes.func.isRequired
};
