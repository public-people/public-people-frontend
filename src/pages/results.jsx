import React from "react";
import Helmet from "react-helmet";
import Header from "./../components/Header/index";
import Results from "./../components/Results/index";
import { Fragment } from "react";
import Main from "./../components/Main/index";

export default function ResultsPage({ data }) {
  const ql = data;
  return (
    <Fragment>
      <Header ql={ql} title={"Search Results | Public People"} />
      <Main>
        <div className="mt-30 mr-20 ml-20">
          <Results />
        </div>
      </Main>
    </Fragment>
  );
}

export const SiteMetaQuery = graphql`
  query Results {
    site {
      ...aboutQueryFragment
    }
  }
`;
