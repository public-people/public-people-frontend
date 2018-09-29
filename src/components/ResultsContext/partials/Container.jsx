import React, { Component } from "react";
import PropTypes from "prop-types";
import Markup from "./Markup";

export default function Container(props) {
  return <Markup {...props} />;
}
