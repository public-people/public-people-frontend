import React from "react";
import PropTypes from "prop-types";
import "normalize.css";
import { Provider } from "react-redux";
import store from "./../redux/store";
import "./../utilities/css";
// IE11 does not recognise fetch

export default function Layout({ children }) {
  return <Provider {...{ store }}>{children()}</Provider>;
}

Layout.propTypes = {
  children: PropTypes.func.isRequired
};
