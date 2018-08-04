import React, { Component } from "react";
import PropTypes from "prop-types";
import Markup from "./Markup";

export default class Container extends Component {
  componentDidMount() {
    const { phrase, initSearchPeople } = this.props;
    if (phrase) {
      initSearchPeople(phrase);
    }
  }

  render() {
    return <Markup {...this.props} />;
  }
}

Container.propTypes = {
  phrase: PropTypes.string,
  initSearchPeople: PropTypes.func.isRequired
};

Container.defaultProps = {
  phrase: ""
};
