import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

export default function GridItem(props) {
  const { children, span, columns, start, utils } = props;

  const rootCss = [
    styles.root,
    start ? styles[`hasBreakPoint${start}`] : null,
    utils
  ].join(" ");

  return (
    <div
      className={rootCss}
      style={{ width: `calc(${(span / columns) * 100}% - 30px)` }}
    >
      {children}
    </div>
  );
}

GridItem.propTypes = {
  children: PropTypes.node.isRequired,
  span: PropTypes.number.isRequired,
  columns: PropTypes.number,
  start: PropTypes.number,
  utils: PropTypes.string
};

GridItem.defaultProps = {
  utils: null,
  columns: 1,
  start: 0
};
