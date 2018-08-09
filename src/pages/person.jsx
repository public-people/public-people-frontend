import React, { Fragment } from "react";
import Header from "./../components/Header/index";
import PersonsList from "./../components/List/PersonList/index";
import Main from "./../components/Main/index";
import Persons from "./../components/Persons/index";
import ResultsContext from "./../components/ResultsContext/index";

export default function PersonsPage({ data }) {
  const ql = data;
  return (
    <Fragment>
      <Header ql={ql} title={"Person | Public People"} />
      <Main>
        <ResultsContext
          utils={"dist-size300-1 component"}
          list={<Persons list={PersonsList} />}
        />
      </Main>
    </Fragment>
  );
}

export const SiteMetaQuery = graphql`
  query Person {
    site {
      ...aboutQueryFragment
    }
  }
`;
