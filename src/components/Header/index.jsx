import React, { Component } from 'react'
import Markup from './partials/Markup.jsx';


const getUrlParameter = (name) => {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      phrase: '',
      loading: true,
    }

    this.events = {
      updatePhrase: this.updatePhrase.bind(this),
    }
  }

  componentDidMount() {
    const phraseQueryString = getUrlParameter('phrase');

    this.setState({ 
      phrase: phraseQueryString || '',
      loading: false 
    });
  }

  updatePhrase(phrase) {
    this.setState({ phrase });
  }

  render() {
    const { phrase, loading } = this.state;
    const { updatePhrase } = this.events;
    return <Markup {...{ phrase, updatePhrase, loading }} />;
  }
}


