import React from "react";
import Helmet from "react-helmet";
import Header from "./../components/Header/index";
import Persons from "./../components/Persons/index";
import { Fragment } from "react";
import Main from "./../components/Main/index";

export default function PersonsPage({ data }) {
  const ql = data;
  return (
    <Fragment>
      <Header ql={ql} title={"Person | Public People"} />
      <Main>
        <div className="mt-30 mr-20 ml-20">
          <Persons />
        </div>
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
