import PropTypes from "prop-types";
import React, { Component } from "react";
import Markup from "./Markup";

export default class Container extends Component {
  componentDidMount() {
    const { person, initSearchPerson } = this.props;
    if (person) {
      initSearchPerson(person);
    }
  }

  render() {
    return <Markup {...this.props} />;
  }
}

Container.propTypes = {
  person: PropTypes.string.isRequired
};

Container.defaultProps = {};
