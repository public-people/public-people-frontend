import React, { Fragment } from "react";
import Header from "./../components/Header/index";
import Main from "./../components/Main/index";
import Results from "./../components/Results/index";
import ResultsContext from "./../components/ResultsContext/index";
import { NavConfig } from "./../components/Nav/config";
import Nav from "./../components/Nav/index";

export default function ResultsPage({ data }) {
  const ql = data;
  return (
    <Fragment>
      <Header
        ql={ql}
        title={"Search Results | Public People"}
        navigation={<Nav links={NavConfig.standard} />}
      />
      <Main>
        <ResultsContext utils={"dist-size300-3"} list={<Results />} />
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
