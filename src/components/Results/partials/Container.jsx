import React, { Component } from "react";
import PropTypes from "prop-types";
import Markup from "./Markup";

export default class Container extends Component {
  componentDidMount() {
    const { phrase, getPeople, limit, offset } = this.props;
    if (phrase) {
      getPeople(phrase, offset, limit);
    }
  }

  render() {
    return <Markup {...this.props} />;
  }
}

Container.propTypes = {
  phrase: PropTypes.string,
  getPeople: PropTypes.func.isRequired
};

Container.defaultProps = {
  phrase: ""
};
