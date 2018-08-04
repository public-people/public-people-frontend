import React from "react";
import Header from "./../components/Header/index";
import { Fragment } from "react";
import Main from "./../components/Main/index";

export default function PersonsPage({ data }) {
  const ql = data;
  return (
    <Fragment>
      <Header ql={ql} title={"Credits & Attributions | Public People"} />
      <Main>
        <div className="mt-30 mr-20 ml-20">
          <p>
            Following:&nbsp;
            <a href="https://thenounproject.zendesk.com/hc/en-us/articles/200509948-Medium-Specific-Credit-Requirements-Examples">
              Medium-Specific Credit Requirements & Examples
            </a>
          </p>
          <ul>
            Icons:
            <li>
              <a href="https://thenounproject.com/term/mail/1047271/">Mail</a>{" "}
              by Orin Zuu from{" "}
              <a href="https://thenounproject">The Noun Project</a>.
            </li>
          </ul>
        </div>
      </Main>
    </Fragment>
  );
}

export const SiteMetaQuery = graphql`
  query CreditsAndAttributions {
    site {
      ...aboutQueryFragment
    }
  }
`;
