import PropTypes from "prop-types";
import React, { Component } from "react";
import Markup from "./Markup";

export default class Container extends Component {
  componentDidMount() {
    const { personID, initSearchPerson } = this.props;
    if (personID) {
      initSearchPerson(personID);
    }
  }

  render() {
    return <Markup {...this.props} />;
  }
}

Container.propTypes = {
  personID: PropTypes.number.isRequired
};

Container.defaultProps = {};
