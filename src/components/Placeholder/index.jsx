import PropTypes from "prop-types";
import React from "react";
import styles from "./styles.module.scss";

export default function Placeholder(props) {
  const { utils, style } = props;
  const rootCss = [styles.root, utils].join(" ");

  return <div className={style}>&nbsp;</div>;
}

Placeholder.propTypes = {
  utils: PropTypes.string,
  styles: PropTypes.string
};
