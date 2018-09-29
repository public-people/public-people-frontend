import PropTypes from "prop-types";
import React from "react";
import styles from "./styles.module.scss";

export default function Button(props) {
  // Destructuring assignment: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
  const { link, clickFn, children, primary, submit, utils = null } = props;

  if (link && !clickFn) {
    return (
      <a href={link} className={styles.root}>
        {children}
      </a>
    );
  }

  const rootCss = [
    styles.root,
    primary ? styles.isPrimary : submit ? styles.isSubmit : null,
    utils
  ].join(" ");

  return (
    <button
      className={rootCss}
      onClick={clickFn}
      type={submit ? "submit" : null}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  link: PropTypes.string,
  clickFn: PropTypes.func,
  children: PropTypes.node,
  primary: PropTypes.bool,
  inline: PropTypes.bool,
  submit: PropTypes.bool,
  utils: PropTypes.string
};

Button.defaultProps = {
  link: null,
  clickFn: null,
  children: null,
  primary: false,
  inline: false,
  submit: false,
  utils: null
};
