import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

export default function Sidebar(props) {
  const {
    utils,
    data,
    renderMemberships,
    loading,
    loadingPerson,
    error,
    style
  } = props;
  const rootCss = [styles.root, style, utils].join(" ");
  const loadingCss = [styles.loading, style, utils].join(" ");
  /* eslint-disable no-unneeded-ternary */
  const check = !loadingPerson && !loading ? true : false;
  /* eslint-enable no-unneeded-ternary */

  return (
    <Fragment>
      {!check && <aside className={loadingCss} />}
      {check && <aside className={rootCss}>{renderMemberships(data)}</aside>}
    </Fragment>
  );
}

Sidebar.propTypes = {
  utils: PropTypes.string,
  data: PropTypes.any.isRequired,
  renderMemberships: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.object,
    PropTypes.func
  ]).isRequired,
  loading: PropTypes.bool,
  loadingPerson: PropTypes.bool,
  error: PropTypes.object,
  style: PropTypes.string
};
