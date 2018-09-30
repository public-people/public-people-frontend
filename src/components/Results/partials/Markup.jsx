import React, { Fragment } from "react";
import PropTypes from "prop-types";
// cuid www.npmjs.com/package/cuid
import cuid from "cuid";
import CardHeader from "../../Card/components/results/Header/index";
import CardBody from "../../Card/components/results/Body/index";
import CardFooter from "../../Card/components/results/Footer/index";
import Card from "./../../Card";
import FadeInWrap from "./../../FadeInWrap";
import Placeholder from "./../../Placeholder";
import styles from "./../styles.module.scss";

const buildResults = (results, getPerson, limit, offset) =>
  results.map((item, index) => (
    <li className="component flex" key={cuid()}>
      <Card
        header={
          <CardHeader
            clickFn={getPerson}
            item={item}
            headerLevel={2}
            offset={offset}
            limit={limit}
          />
        }
        body={<CardBody item={item} />}
        footer={<CardFooter item={item} />}
        title={item.name}
        link
        height={250}
      />
    </li>
  ));

export default function Markup(props) {
  const {
    loading,
    error,
    results,
    phrase,
    getPerson,
    utils,
    offset,
    limit
  } = props;
  const rootCss = [styles.root, utils].join(" ");
  if (error === false) {
    return (
      <div>
        No results were found for this search. Please try another search term
      </div>
    );
  }

  if (loading) {
    return [0, 1, 2, 3].map(index => (
      <div key={cuid()} className={styles.item}>
        <FadeInWrap delay={index * 0.2}>
          <Placeholder utils="rounded-4" height={250} />
        </FadeInWrap>
      </div>
    ));
  }

  if (error.isError) {
    return (
      <FadeInWrap>
        <div className="text-center">
          <Card highlighted title="Error" utils="max-w-4 ml-auto mr-auto">
            Something went wrong. Please try again at a later stage
          </Card>
        </div>
      </FadeInWrap>
    );
  }

  if (results.length < 1) {
    return (
      <FadeInWrap>
        <div className="text-center">
          <Card
            highlighted
            title="No people found"
            utils="max-w-4 ml-auto mr-auto"
          >
            No result was found matching the query &ldquo;
            {phrase}
            &rdquo;, please try another phrase.
          </Card>
        </div>
      </FadeInWrap>
    );
  }
  return (
    <Fragment>
      {results ? buildResults(results, getPerson, limit, offset) : null}
    </Fragment>
  );
}

Markup.propTypes = {
  error: PropTypes.object.isRequired,
  phrase: PropTypes.string.isRequired,
  results: PropTypes.array.isRequired,
  getPerson: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  utils: PropTypes.string,
  offset: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired
};
