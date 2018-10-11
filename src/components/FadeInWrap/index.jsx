import PropTypes from "prop-types";
import React from "react";
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
  delay: PropTypes.number,
  utils: PropTypes.string
};

FadeInWrap.defaultProps = {
  delay: null,
  utils: null
};
