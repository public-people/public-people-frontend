import PropTypes from "prop-types";
import React, { Component } from "react";
import Markup from "./Markup";

export default class Container extends Component {
  componentDidMount() {
    const { personID, limit, offset } = this.props;
    // if (personID) {
    //   initSearchPerson(personID, limit, offset);
    // }
  }

  render() {
    return <Markup {...this.props} />;
  }
}

// Container.propTypes = {
//   personID: PropTypes.number.isRequired
// };

// Container.defaultProps = {};
