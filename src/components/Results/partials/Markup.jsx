import React, { Fragment } from "react";
import PropTypes from "prop-types";

import CardHeader from "../../Card/components/results/Header/index";
import CardBody from "../../Card/components/results/Body/index";

import Card from "./../../Card";
import FadeInWrap from "./../../FadeInWrap";
import styles from "./../styles.module.scss";

const buildResults = (results, getPersonAndClear, limit, offset, itemStyle) =>
  results.map((item, index) => (
    <li className={itemStyle} key={item.id}>
      <FadeInWrap>
        <Card
          header={
            <CardHeader
              clickFn={getPersonAndClear}
              item={item}
              headerLevel={4}
              offset={offset}
              limit={limit}
            />
          }
          body={<CardBody item={item} />}
          title={item.name}
          link
          height={250}
        />
      </FadeInWrap>
    </li>
  ));

export default function Markup(props) {
  const {
    loading,
    error,
    results,
    phrase,
    getPerson,
    clearPeopleState,
    clearPersonState,
    utils,
    offset,
    limit
  } = props;
  /* eslint-disable no-shadow */
  const getPersonAndClear = (personID, limit, offset) => {
    clearPeopleState();
    clearPersonState();
    getPerson(personID, limit, offset);
  };
  /* eslint-enable no-shadow */
  const itemStyle = [styles.item, "component flex"].join(" ");
  const rootCss = [styles.root, utils].join(" ");
  if (error === false) {
    return (
      <div>
        No results were found for this search. Please try another search term
      </div>
    );
  }

  if (loading) {
    return <Fragment />;
  }

  if (error.isError) {
    return (
      <FadeInWrap>
        <div className="text-center">
          Something went wrong. Please try again at a later stage
        </div>
      </FadeInWrap>
    );
  }

  if (results.count === 0 || Object.keys(results).length === 0) {
    return (
      <FadeInWrap>
        <div className="text-center">
          No result was found matching the query &ldquo;
          {phrase}
          &rdquo;, please try another phrase.
        </div>
      </FadeInWrap>
    );
  }
  return (
    <Fragment>
      {results
        ? buildResults(results, getPersonAndClear, limit, offset, itemStyle)
        : null}
    </Fragment>
  );
}

Markup.propTypes = {
  error: PropTypes.object.isRequired,
  phrase: PropTypes.string,
  results: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  getPerson: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  utils: PropTypes.string,
  offset: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  clearPeopleState: PropTypes.func,
  clearPersonState: PropTypes.func
};
