import PropTypes from "prop-types";
import React, { Fragment } from "react";
import styles from "./../styles.module.scss";
import Placeholder from "./../../Placeholder";

export default function ResultsContext(props) {
  // Destructuring assignment: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
  const { utils, list, error, results, loading, loadingPerson } = props;
  const conditionalCss =
    error.isError || Object.keys(results) === 0 || results.count === 0
      ? [styles.root, styles.errorOrEmpty].join(" ")
      : [styles.root];

  const rootCss = [conditionalCss, utils].join(" ");
  if (loading || loadingPerson) {
    return (
      <Placeholder style={styles.placeholder}>
        <ul className={rootCss}>{list}</ul>
      </Placeholder>
    );
  }
  return (
    <Fragment>
      <ul className={rootCss}>{list}</ul>
    </Fragment>
  );
}

ResultsContext.propTypes = {
  utils: PropTypes.string,
  list: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.object,
    PropTypes.func
  ]).isRequired,
  hasSidebar: PropTypes.bool,
  sidebar: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.object,
    PropTypes.func
  ]),
  results: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  person: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  loadingPerson: PropTypes.bool.isRequired,
  error: PropTypes.object.isRequired
};
