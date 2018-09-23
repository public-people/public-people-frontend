import PropTypes from "prop-types";
import React, { Fragment } from "react";
import styles from "./../styles.module.scss";
import Pagination from "./../../Pagination/index";

export default function ResultsContext(props) {
  console.log("ResultsContext", props);
  const { utils, list, limit, offset, results, loading } = props;
  const rootCss = [styles.root, utils].join(" ");
  console.log(limit, offset);
  console.log("limit, offset");
  return (
    <Fragment>
      <ul className={rootCss}>{list(props)}</ul>
      <Pagination />
    </Fragment>
  );
}
ResultsContext.propTypes = {
  utils: PropTypes.string,
  language: PropTypes.string,
  list: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.object,
    PropTypes.func
  ])
};
