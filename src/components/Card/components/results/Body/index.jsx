import PropTypes from "prop-types";
import React from "react";
import styles from "./styles.module.scss";

export default function ResultsBody(props) {
  const { utils } = props;
  const rootCss = [styles.root, utils].join(" ");
  return <div>Test Body</div>;
}

ResultsBody.propTypes = {
  utils: PropTypes.string
};
