import React, { Component } from 'react'
import Markup from './partials/Markup.jsx';
import { parse } from 'query-string';

const fetchWrapper = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          reject(response);
        }

        response.json()
          .then((data) => {
            resolve(data);
         })
      })
    .catch(reject)
  })
}


export default class extends Component {
  constructor(props) {
    super(props);
    const { phrase = '' } = parse(location.search)
    this.static = {
      phrase,
    }

    this.state = {
      loading: true,
      results: null,
      error: null,
    }
  }

  componentDidMount() {
    const { phrase } = this.static;
    const urlRoot = 'https://public-people.techforgood.org.za/api/persons/'
    const phraseQuery = `?search=${encodeURI(phrase)}`;

    fetchWrapper(urlRoot + phraseQuery)
      .then((data) => {
        this.setState({ results: data.results });
      })
  }

  render() {
    const { loading, error, results } = this.state;
    const { phrase } = this.static;
    return <Markup {...{ phrase, loading, error, results }} />;
  }
}


