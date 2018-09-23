import React, { Component } from "react";
import PropTypes from "prop-types";
import Markup from "./Markup";

export default class Container extends Component {
  componentDidMount() {}

  render() {
    return <Markup {...this.props} />;
  }
}

Container.propTypes = {};

Container.defaultProps = {};
