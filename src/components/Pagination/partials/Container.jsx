import React, { Component } from "react";
import PropTypes from "prop-types";
import Markup from "./Markup";

export default class Container extends Component {
  componentDidMount() {
    const {
      count,
      current_url,
      limit,
      offset,
      utils,
      offsetStep,
      searchPerson,
      searchPeople,
      phrase,
      personID
    } = this.props;
  }

  render() {
    return <Markup {...this.props} />;
  }
}

Container.propTypes = {};

Container.defaultProps = {};
