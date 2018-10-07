import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

export default function Sidebar(props) {
  const { utils, data, render, loading, error, style } = props;
  const rootCss = [styles.root, style, utils].join(" ");
  return (
    <Fragment>
      {loading && <aside className={rootCss}>Loading</aside>}
      {!loading && <aside className={rootCss}>{render(data)}</aside>}
    </Fragment>
  );
}

Sidebar.propTypes = {
  utils: PropTypes.string,
  data: PropTypes.any.isRequired,
  render: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.object,
    PropTypes.func
  ]).isRequired
};
