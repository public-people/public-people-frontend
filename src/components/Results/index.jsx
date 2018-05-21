import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Markup from './partials/Markup';
import createPromiseToken from './../../utilities/js/createPromiseToken';
import fetchWrapper from './../../utilities/js/fetchWrapper';


export default class Results extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      results: null,
      error: null,
    };

    this.static = {
      activeFetch: null,
    };
  }

  componentWillReceiveProps() {
    this.setState({ loading: true });
    const { phrase } = this.props;

    if (this.static.activeFetch) {
      this.static.activeFetch.cancel();
    }

    const urlRoot = 'https://public-people.techforgood.org.za/api/persons/';
    const phraseQuery = `?search=${encodeURI(phrase)}`;

    const request = fetchWrapper(urlRoot + phraseQuery);
    this.static.activeFetch = createPromiseToken(request);

    this.static.activeFetch.request.then((data) => {
      this.setState({
        results: data.results,
        loading: false,
      });
    });
  }

  render() {
    const { loading, error, results } = this.state;
    return <Markup {...{ loading, error, results }} />;
  }
}


Results.propTypes = {
  phrase: PropTypes.string.isRequired,
};
