import PropTypes from "prop-types";
import React from "react";
import styles from "./styles.module.scss";

export default function ResultsContext(props) {
  const { utils, list } = props;

  const rootCss = [styles.root, utils].join(" ");
  return (
    <ul utils={"component-container"} className={rootCss}>
      {props.list}
    </ul>
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
