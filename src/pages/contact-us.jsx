import React, { Fragment } from "react";
import ReadingContext from "../components/ReadingContext/index";
import Main from "./../components/Main/index";
import Header from "./../components/Header/index";

const content = `<h2>Contact us</h2>

<p>Please email us for inquiries at <a href="mailto:public.people.project@gmail.com">public.people.project@gmail.com</a>.</p>

<p>To contribute, please see our <a href="/about#contributing">contribution guidelines</a></p>`;

export default function ContactUsPage({ data }) {
  const ql = data;
  return (
    <Fragment>
      <Header ql={ql} title={"About Us | Public People"} />
      <Main>
        <ReadingContext lang={"gr"} content={content} />
        <ReadingContext lang={"fr"} content={content} />
      </Main>
    </Fragment>
  );
}

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
