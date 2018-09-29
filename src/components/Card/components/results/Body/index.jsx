import PropTypes from "prop-types";
import React from "react";
import styles from "./styles.module.scss";

export default function ResultsBody(props) {
  // Destructuring assignment: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
  const { utils } = props;
  const rootCss = [styles.root, utils].join(" ");
  return <div>Test Body</div>;
}

ResultsBody.propTypes = {
  utils: PropTypes.string
};

ResultsBody.defaultProps = {
  utils: null
};
