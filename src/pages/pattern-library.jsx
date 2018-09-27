import React from "react";
import Loader from "./../components/Loader/index";
import Button from "./../components/Button/index";
import Icon from "./../components/Icon/index";
import Input from "./../components/Input/index";
import Header from "./../components/Header/index";
import Card from "./../components/Card/index";

export default function PatternsPage({ data }) {
  const ql = data;
  return (
    <div>
      <div className="mt-20">
        <Loader />
      </div>
      <div className="mt-20">
        <Button>Standard Button</Button>
      </div>
      <div className="mt-20">
        <Button primary>Primary Button</Button>
      </div>
      <div className="mt-20">
        <Icon type="search" />
      </div>
      <div className="mt-20">
        <Icon type="home" />
      </div>
      <div className="mt-20">
        <Icon size="large" type="home" />
      </div>
      <div className="mt-20">
        <Button>
          <Icon type="search" />
        </Button>
      </div>
      <div className="mt-20">
        <Button primary>
          <Icon type="home" />
        </Button>
      </div>
      <div className="mt-20">
        <Input placeholder="Placeholder" />
      </div>
      <div className="mt-20">
        <Header ql={ql} title={"Pattern Library | Public People"} />
      </div>

      <div className="mt-20">
        <Card>asds</Card>
      </div>

      <div className="mt-20">
        <Card title="Hello">asds</Card>
      </div>

      <div className="mt-20">
        <Card title="Hello" footer="Footer">
          asds
        </Card>
      </div>

      <div className="mt-20">
        <Card title="Hello" footer="Footer" height="300">
          asds
        </Card>
      </div>
    </div>
  );
}

/* eslint-disable */

export const SiteMetaQuery = graphql`
  query PatternLibrary {
    site {
      ...aboutQueryFragment
    }
  }
`;

/* eslint-enable */
