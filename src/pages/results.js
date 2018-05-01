import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import Header from './../components/Header/index.jsx';
import Grid from './../components/Grid/index.jsx';
import Card from './../components/Card/index.jsx';
import Results from './../components/Results/index.jsx';


export default function IndexPage({ data }) {
  return (
    <div>
      <Helmet title="Search Results | Public People" />
      <Header />
      <div className="mt-30 mr-20 ml-20">
        <Results />
      </div>
    </div>
  )
}