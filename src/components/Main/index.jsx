import React, { Fragment } from "react";
import styles from "./styles.module.scss";
import PropTypes from "prop-types";

export default function Main(props) {
  const { utils } = props;

  const rootCss = [styles.root, utils].join(" ");

  return (
    <Fragment>
      <a className="skiplink" href="#main">
        Skip to main content.
      </a>
      <main id="main" className={rootCss}>
        {props.children}
      </main>
    </Fragment>
  );
}

Main.propTypes = {
  utils: PropTypes.string
};
