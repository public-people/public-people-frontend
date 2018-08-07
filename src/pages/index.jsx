import React from "react";
import Header from "./../components/Header";
import Card from "./../components/Card";
import Button from "./../components/Button";
import FadeInWrap from "./../components/FadeInWrap";
import { Fragment } from "react";
import Main from "./../components/Main/index";

export default function IndexPage({ data }) {
  const ql = data;
  console.log("ql", ql);
  return (
    <Fragment>
      <Header ql={ql} title={"Homepage | Public People"} />
      <Main utils={"dist-size300-3"}>
        <FadeInWrap utils={"component"} delay={0}>
          <Card title="Hello" highlighted>
            <p>afdgsfa</p>
            <p>adfgafdsh</p>
          </Card>
        </FadeInWrap>

        <FadeInWrap utils={"component"} delay={0.2}>
          <Card title="Hello">
            <p>afdgsfadsdhsgfdh</p>
            <p>adfgafdgh</p>
            <Button link="http://techforgood.org.za/politician-data-project/">
              Contribute to this project
            </Button>
          </Card>
        </FadeInWrap>

        <FadeInWrap utils={"component"} delay={0.4}>
          <Card title="Hello">
            <p>afdgsfadsdhsgfdh</p>
            <p>adfgafdgh</p>
          </Card>
        </FadeInWrap>
      </Main>
    </Fragment>
  );
}

export const query = graphql`
  query siteMetadata_2 {
    site {
      ...aboutQueryFragment
    }
  }
`;
