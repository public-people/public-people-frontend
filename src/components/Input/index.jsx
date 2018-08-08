import PropTypes from "prop-types";
import React from "react";
import styles from "./styles.module.scss";

export default function Input(props) {
  const { placeholder, utils, onChange, value, loading } = props;

  const mainCss = [styles.root, utils].join(" ");

  if (loading) {
    return <div className={mainCss}>&nbsp;</div>;
  }

  return <input className={mainCss} {...{ placeholder, value, onChange }} />;
}

Input.propTypes = {
  placeholder: PropTypes.string,
  utils: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  loading: PropTypes.bool
};

Input.defaultProps = {
  placeholder: null,
  utils: null,
  value: null,
  loading: false
};
