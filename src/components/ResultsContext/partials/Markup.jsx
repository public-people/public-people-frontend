import PropTypes from "prop-types";
import React, { Fragment } from "react";
import styles from "./../styles.module.scss";
import Pagination from "./../../Pagination/index";

export default function ResultsContext(props) {
  console.log("ResultsContext", props);
  const { utils, list } = props;

  const rootCss = [styles.root, utils].join(" ");
  return (
    <Fragment>
      <ul className={rootCss}>{props.list}</ul>
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
