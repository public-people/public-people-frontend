import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

export default function FadeInWrap(props) {
  const { utils, children, delay } = props;

  const style = delay ? { animationDelay: `${delay}s` } : null;

  const rootCss = [styles.root, utils].join(" ");

  return (
    <div className={rootCss} {...{ style }}>
      {children}
    </div>
  );
}

FadeInWrap.propTypes = {
  children: PropTypes.node.isRequired,
  delay: PropTypes.number
};

FadeInWrap.defaultProps = {
  delay: null
};
