import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

export default function Placeholder({ utils, height }) {
  const className = [styles.root, utils].join(" ");

  const style = height ? { height } : {};

  return <div {...{ className, style }}>&nbsp;</div>;
}

Placeholder.propTypes = {
  utils: PropTypes.string,
  height: PropTypes.number
};

Placeholder.defaultProps = {
  utils: null,
  height: null
};
