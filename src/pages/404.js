import React, { Fragment } from "react";
import Main from "../components/Main/index";
import { NavConfig } from "./../components/Nav/config";
import Nav from "./../components/Nav/index";
import Header from "./../components/Header/index";
import ReadingContext from "../components/ReadingContext/index";

const content = `<div>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>`;

export default function NotFoundPage({ data }) {
  const ql = data;
  /* eslint-disable react/jsx-filename-extension */
  /* GatsbyJS requires 404 to be .js file */
  return (
    <Fragment>
      <Header
        ql={ql}
        title="Contact Us | Public People"
        navigation={<Nav links={NavConfig.standard} />}
      />
      <Main>
        <ReadingContext content={content} />
      </Main>
    </Fragment>
  );
  /* eslint-enable */
}

/* eslint-disable */
export const SiteMetaQuery = graphql`
  query NotFoundPage {
    site {
      ...aboutQueryFragment
    }
  }
`;
/* eslint-disable */
