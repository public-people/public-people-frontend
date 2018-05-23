import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Markup from './Markup';


export default class Container extends Component {
  componentDidMount() {
    const { phrase, initSearch } = this.props;

    if (phrase) {
      initSearch(phrase);
    }
  }

  render() {
    return <Markup {...this.props} />;
  }
}


Container.propTypes = {
  phrase: PropTypes.string,
  initSearch: PropTypes.func.isRequired,
};


Container.defaultProps = {
  phrase: '',
};
