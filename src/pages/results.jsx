import React, { Fragment } from "react";
import Header from "./../components/Header/index";
import Main from "./../components/Main/index";
import Results from "./../components/Results/index";
import ResultsContext from "./../components/ResultsContext/index";
import { NavConfig } from "./../components/Nav/config";
import Nav from "./../components/Nav/index";
import Pagination from "./../components/Pagination/index";

export default function ResultsPage({ data }) {
  const ql = data;
  return (
    <Fragment>
      <Header
        ql={ql}
        title="Search Results | Public People"
        navigation={<Nav links={NavConfig.standard} />}
      />
      <Main>
        <ResultsContext
          utils="dist-size1-1 dist-size400-2 dist-size500-3 dist-size800-4"
          list={<Results />}
        />
        <Pagination />
      </Main>
    </Fragment>
  );
}

/* eslint-disable */

export const SiteMetaQuery = graphql`
  query Results {
    site {
      ...aboutQueryFragment
    }
  }
`;

/* eslint-enable */
