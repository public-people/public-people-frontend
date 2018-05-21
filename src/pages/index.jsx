import React from 'react';
import Helmet from 'react-helmet';
import Header from './../components/Header';
import Grid from './../components/Grid';
import GridItem from './../components/GridItem';
import Card from './../components/Card';
import Button from './../components/Button';


export default function IndexPage() {
  return (
    <div>
      <Helmet title="Homepage | Public People" />
      <Header />
      <div className="mt-30 mr-20 ml-20">
        <Grid start={800} columns={2} utils="max-w-4 ml-auto mr-auto">

          <GridItem span={2}>
            <Card title="Hello" highlighted>
              <p>afdgsfadsdhsgfdh</p>
              <p>adfgafdgh</p>
            </Card>
          </GridItem>

          <GridItem span={1}>
            <Card title="Hello">
              <p>afdgsfadsdhsgfdh</p>
              <p>adfgafdgh</p>
              <Button link="http://techforgood.org.za/politician-data-project/">Contribute to this project</Button>
            </Card>
          </GridItem>

          <GridItem span={1}>
            <Card title="Hello">
              <p>afdgsfadsdhsgfdh</p>
              <p>adfgafdgh</p>
            </Card>
          </GridItem>

        </Grid>
      </div>

    </div>
  );
}
