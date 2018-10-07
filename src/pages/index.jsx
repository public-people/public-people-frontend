import React, { Fragment, Component } from "react";
import Header from "./../components/Header";
import Main from "./../components/Main/index";
import Nav from "./../components/Nav/index";
import { NavConfig } from "./../components/Nav/config";
import Results from "./../components/Results/index";
import ResultsContext from "./../components/ResultsContext/index";

export default function IndexPage({ data }) {
  const ql = data;

  return (
    <Fragment>
      <Header
        ql={ql}
        title="Homepage | Public People"
        navigation={<Nav links={NavConfig.standard} />}
      />
      <Main utils="results">
        <ResultsContext
          layoutCss="dist-size1-1dist-size400-2 dist-size500-3 dist-size800-4"
          list={<Results page="frontpage" />}
        />
      </Main>
    </Fragment>
  );
}

/* eslint-disable */

export const query = graphql`
  query siteMetadata_2 {
    site {
      ...aboutQueryFragment
    }
  }
`;

/* eslint-enable */
