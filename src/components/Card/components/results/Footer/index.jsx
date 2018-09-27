import PropTypes from "prop-types";
import React from "react";
import styles from "./styles.module.scss";

export default function ResultsFooter(props) {
  const { utils } = props;
  const rootCss = [styles.root, utils].join(" ");
  return <div>Test Foot</div>;
}

ResultsFooter.propTypes = {
  utils: PropTypes.string
};

ResultsFooter.defaultProps = {
  utils: null
};
