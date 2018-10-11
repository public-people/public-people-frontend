import PropTypes from "prop-types";
import React, { Component } from "react";
import Markup from "./Markup";

export default function Container(props) {
  const { personID, limit, offset } = props;
  return <Markup {...props} />;
}
// Container.defaultProps = {};
