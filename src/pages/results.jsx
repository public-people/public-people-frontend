import React from 'react';
import Helmet from 'react-helmet';
import Header from './../components/Header/index';
import Results from './../components/Results/index';


export default function ResultsPage() {
  return (
    <div>
      <Helmet title="Search Results | Public People" />
      <Header targetSelf />
      <div className="mt-30 mr-20 ml-20">
        <Results />
      </div>
    </div>
  );
}
