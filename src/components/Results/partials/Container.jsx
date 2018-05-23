import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Markup from './Markup';
import { initUpdate } from './../../../redux/modules/people';


export default class Container extends Component {
  componentDidMount() {
    const { phrase } = this.props;

    if (phrase) {
      initUpdate(phrase);
    }
  }

  render() {
    return <Markup {...this.props} />;
  }
}


Container.propTypes = {
  phrase: PropTypes.string,
};


Container.defaultProps = {
  phrase: '',
};
