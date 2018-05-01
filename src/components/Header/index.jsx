import React, { Component } from 'react'
import Markup from './partials/Markup.jsx';
import { parse } from 'query-string';

export default class extends Component {
  constructor(props) {
    super(props);
    const { phrase: phraseQueryString } = parse(location.search)

    this.state = {
      phrase: phraseQueryString || '',
    }

    this.events = {
      updatePhrase: this.updatePhrase.bind(this),
    }
  }

  updatePhrase(phrase) {
    this.setState({ phrase });
  }

  render() {
    const { phrase } = this.state;
    const { updatePhrase } = this.events;
    return <Markup {...{ phrase, updatePhrase }} />;
  }
}


