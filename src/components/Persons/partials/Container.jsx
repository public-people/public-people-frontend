import React, { Component } from "react";
import PropTypes from "prop-types";
import Markup from "./Markup";

export default class Container extends Component {
  componentDidMount() {
    const { person, initSearchPerson } = this.props;
    console.log("this.props", this.props);

    if (person) {
      initSearchPerson(person);
    }
  }

  render() {
    return <Markup {...this.props} />;
  }
}

Container.propTypes = {
  person: PropTypes.string,
  personToken: PropTypes.string,
  initSearchPeople: PropTypes.func.isRequired,
  initSearchPerson: PropTypes.func.isRequired
};

Container.defaultProps = {
  phrase: ""
};
