import React from "react";
import Helmet from "react-helmet";
import Header from "./../components/Header";
import Grid from "./../components/Grid";
import GridItem from "./../components/GridItem";
import Card from "./../components/Card";
import Button from "./../components/Button";
import BounceWrap from "./../components/BounceWrap";
import { Fragment } from "react";
import Main from "./../components/Main/index";

export default function IndexPage({ data }) {
  const ql = data;
  console.log("ql", ql);
  return (
    <Fragment>
      <Header ql={ql} title={"Homepage | Public People"} />
      <Main>
        <div className="mt-30 mr-20 ml-20">
          <Grid start={800} columns={2} utils="max-w-4 ml-auto mr-auto">
            <GridItem span={2}>
              <BounceWrap delay={0}>
                <Card title="Hello" highlighted>
                  <p>afdgsfa</p>
                  <p>adfgafdsh</p>
                </Card>
              </BounceWrap>
            </GridItem>

            <GridItem ql={ql} span={1}>
              <BounceWrap delay={0.2}>
                <Card title="Hello">
                  <p>afdgsfadsdhsgfdh</p>
                  <p>adfgafdgh</p>
                  <Button link="http://techforgood.org.za/politician-data-project/">
                    Contribute to this project
                  </Button>
                </Card>
              </BounceWrap>
            </GridItem>

            <GridItem span={1}>
              <BounceWrap delay={0.4}>
                <Card title="Hello">
                  <p>afdgsfadsdhsgfdh</p>
                  <p>adfgafdgh</p>
                </Card>
              </BounceWrap>
            </GridItem>
          </Grid>
        </div>
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
