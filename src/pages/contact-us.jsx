import React, { Fragment } from "react";
import ReadingContext from "../components/ReadingContext/index";
import Main from "./../components/Main/index";
import Header from "./../components/Header/index";
import { NavConfig } from "./../components/Nav/config";
import Nav from "./../components/Nav/index";

const content = `<h2>Contact us</h2>

<p>Please email us for inquiries at <a href="mailto:public.people.project@gmail.com">public.people.project@gmail.com</a>.</p>

<p>To contribute, please see our <a href="/about#contributing">contribution guidelines</a></p>`;

export default function ContactUsPage({ data }) {
  const ql = data;
  return (
    <Fragment>
      <Header
        ql={ql}
        title="Contact Us | Public People"
        navigation={<Nav links={NavConfig.standard} />}
      />
      <Main utils="dist-size1-3">
        <ReadingContext utils="component" lang="en" content={content} />
      </Main>
    </Fragment>
  );
}

/* eslint-disable */

export const aboutQueryFragment = graphql`
  fragment aboutQueryFragment on Site {
    siteMetadata {
      language
    }
  }
`;

export const SiteMetaQuery = graphql`
  query ContactUs {
    site {
      ...aboutQueryFragment
    }
  }
`;

/* eslint-enable */
