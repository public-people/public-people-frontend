import React, { Fragment } from "react";
import Header from "./../components/Header/index";
import Main from "./../components/Main/index";
import Results from "./../components/Results/index";
import ResultsContext from "./../components/ResultsContext/index";

export default function ResultsPage({ data }) {
  const ql = data;
  return (
    <Fragment>
      <Header ql={ql} title={"Search Results | Public People"} />
      <Main>
        <ResultsContext utils={"dist-size300-3 component"} list={<Results />} />
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
