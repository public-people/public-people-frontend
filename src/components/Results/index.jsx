import React, { Component } from 'react'
import Markup from './partials/Markup.jsx';


const getUrlParameter = (name) => {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

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

    this.state = {
      loading: true,
      results: null,
      error: null,
    }
  }

  componentDidMount() {
    const phrase = getUrlParameter('phrase');
    const urlRoot = 'https://public-people.techforgood.org.za/api/persons/'
    const phraseQuery = `?search=${encodeURI(phrase)}`;

    fetchWrapper(urlRoot + phraseQuery)
      .then((data) => {
        this.setState({ results: data.results });
      })
  }

  render() {
    const { loading, error, results } = this.state;
    const phrase = '';
    return <Markup {...{ phrase, loading, error, results }} />;
  }
}


